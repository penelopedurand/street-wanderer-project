import { useState, useEffect } from "react";
import { useHistory, Route, Link, ReactRouter } from "react-router-dom";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import NewMarker from "./NewMarker";
import CatProfile from "./CatProfile";
import CatContainer from "./CatContainer";
import Header from "./Header";
import NewCat from "./NewCat";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [lng, setLng] = useState()
  const [lat, setLat] = useState()
  const [viewport, setViewport] = useState({
    latitude: 40.646905,
    longitude: -73.958142,
    // width: '90vw',
    // height: '90vh',
    zoom: 10
  })

  const [mapData, setMapData] = useState([])
  const [selectedMark, setSelectedMark] = useState(null)
  const [id, setId] = useState()
  const [cats, setCats] = useState()

  const history = useHistory()
  // console.log(lat)
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
    fetch('/cats')
      .then(res => res.json())
      .then(setCats);
  }, []);
  // console.log(cats)

  // the useeffect for the map
  useEffect(() => {

    fetch("/markers")
      .then(resp => resp.json())
      .then((data) => setMapData(data))

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

  // delete the cat marker
  function handleDelete() {
    fetch(`/markers/${id}`, {
      method: "DELETE"
    })
      // .then((res) => res.json())
      .then(data => {//{console.log(data)
        if (data.ok) {
          // console.log(data)
          setSelectedMark(null)
          deleteId(id)
        } else {
          console.log("no")
        }
      })
  }

  function deleteId(deletedId) {
    const updatedMap = mapData.filter(map => map.id !== deletedId)
    setMapData(updatedMap)
  }

  const onUpdatedCat = (updatedCat) => {
    const newUpdatedCat = (cat) => {
      if (cat.id === updatedCat.id) {
        return updatedCat
      } else {
        return cat
      }
    }
    setCats(newUpdatedCat)
  }

  const filteredDeletedCat = (id) => {
    setCats(cats.filter(cat => cat.id !== id))
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
      {user ? (<div>
        <Header user={user} handleLogout={handleLogout} />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/new_sighting_of_wanderer">
          <NewMarker lng={lng} lat={lat} newMarker={newMarker} user={user} />
        </Route>
        <Route exact path="/markers/">
          <CatContainer cats={cats} filteredDeletedCat={filteredDeletedCat} onUpdatedCat={onUpdatedCat} />
        </Route>
        <Route exact path="/markers/:id/cats">
          <CatProfile />
        </Route>
      </div>
      ) : null}
      <div>
        {user ? (<div className="map">

          <ReactMapGL onClick={(e) => {
            console.log(e.lngLat.lng)
            console.log(e.lngLat.lat)
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
                <button className="pin" onClick={e => markerButton(e, marks)}>
                  {/* <img src="./pets-icon.jpg" style={{ width: "1%", height: "1%" }} /> */}
                  <img src="./pets-marker.png" />
                </button>
              </Marker>
            ))}
            {selectedMark ? (
              <Popup
                // latitude={40.715553207343646}
                // longitude={-73.99283450881435}
                latitude={selectedMark.latitude}
                longitude={selectedMark.longitude}
                onClose={() => setSelectedMark(null)}>

                <div style={{ width: "auto", height: "auto" }}>
                  <img style={{ height: "150px", width: "auto", marginTop: "5px" }} src={selectedMark.image}></img>
                  <ul>
                    <li>{selectedMark.description}</li>
                    <li>Cat Number: {selectedMark.cat_id}</li>
                  </ul>
                  <Link to={`/markers/${id}/cats`}>
                    <button>See More</button>
                  </Link>

                  {user ? (
                    <button onClick={handleDelete}>Delete</button>
                  ) : null}
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
        ) : <div></div>}
      </div>
    </div >
  );
}

export default App;
