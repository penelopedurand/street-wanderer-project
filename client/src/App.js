import { useHistory, useState, useEffect } from "react";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import NewSighting from "./NewSighting";
import CatProfile from "./CatProfile";
import Header from "./Header";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // const history = useHistory()

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
    // .then(res => res.json())
    // .then(setCharacters);

  }, []);


  if (!isAuthenticated) return <Login error={'please log in'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

  return (
    <div>
      <div id="marco">
        <div className="header">
          <Header user={user} />
        </div>
        <div className="App">
          <div className="login">
            <Route exact path="/">
              <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
            </Route>
          </div>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/new_sighting_of_wanderer">
            <NewSighting />
          </Route>
          <Route exact path="/markers/:id/cats">
            <CatProfile />
          </Route>
        </div>
      </div>
    </div >
  );
}

export default App;
