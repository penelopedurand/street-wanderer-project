import { useState, useEffect } from "react";
import { useHistory, Route, ReactRouter } from "react-router-dom";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import NewMarker from "./NewMarker";
import CatProfile from "./CatProfile";
import CatContainer from "./CatContainer";
import Header from "./Header";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [lng, setLng] = useState()
  const [lat, setLat] = useState()
  const [viewport, setViewport] = useState({
    latitude: 40.646905,
    longitude: -73.958142,
    width: '90vw',
    height: '90vh',
    zoom: 10
  })

  const [mapData, setMapData] = useState([])
  const [selectedMark, setSelectedMark] = useState(null)
  const [id, setId] = useState()

  const history = useHistory()

  useEffect(() => {
    fetch('/me')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              setIsAuthenticated(true);
              setUser(user);
            });
        }
      });
    // fetch('/home')
    //   .then(res => res.json())
    //   .then(setCats);

  }, []);

  // the useeffect for the map
  useEffect(() => {

    fetch("/markers")
      .then(resp => resp.json())
      .then((data) => console.log(data))

  }, [])

  function newMarker(data) {
    setMapData([...mapData, data])
  }

  function markerButton(e, marks) {

    e.preventDefault()
    setId(marks.id)
    // setSelectedMark(marks.id)          
    fetch(`/markers/${marks.id}`)
      .then(resp => resp.json())
      .then((data) => setSelectedMark(data))
    // console.log(selectedMark)

  }


  if (!isAuthenticated) return <Login error={'please log in'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null))
      .then(history.push("/"));
  }

  return (
    <div>
      <div className="App">
        <Route exact path="/">
          <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        </Route>
      </div>
      <Route exact path="/signup">
        <Signup />
      </Route>

      {user ? (<Header user={user} handleLogout={handleLogout} />) : null}

      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/new_sighting_of_wanderer">
        <NewMarker lng={lng} lat={lat} user={user} />
      </Route>
      <Route exact path="/markers/">
        <CatContainer />
      </Route>
      <Route exact path="/markers/:id/cats">
        <CatProfile />
      </Route>
      <div>
        {user ? (<div className="map">

          <ReactMapGL onClick={(e) => {
            setLng(e.lngLat.lng)
            setLat(e.lngLat.lat)
          }}
            {...viewport}
            mapboxAccessToken="pk.eyJ1IjoibGFyYWluYm93bGxhbWEiLCJhIjoiY2w1OGNkbzI2MXl1NTNkbWVyNXJjdzJ2bCJ9.7N9MTnvtXDVgy6HQJByhEA"
            mapStyle="mapbox://styles/larainbowllama/cl589z875000215ubfg7ul7bm"
            style={{ width: 1000, height: 300 }}
            onMove={evt => setViewport(evt.viewState)}
          >
            {mapData.map(marks => (
              <Marker
                key={marks.id}
                longitude={marks.longitude} latitude={marks.latitude}
              >
                {/* <button className="pin" onClick={e => markerButton(e, marks)}>
                  <img src="./pin.png" />
                  <img src="./map-marker-icon.png" />
                </button> */}
              </Marker>
            ))}

          </ReactMapGL>
        </div>
        ) : <div></div>}
      </div>
    </div >
  );
}

export default App;
