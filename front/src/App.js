import React from "react";
import { Switch, Route } from "react-router-dom";
import Home  from '../src/Pages/HomePage.js';
import Gallery  from '../src/Pages/Gallery.js';
import Events from '../src/Pages/Events.js';
import Contact  from '../src/Pages/Contact.js';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/Gallery"  render={props => <Gallery {...props} />} />
        <Route path="/Events"  render={props => <Events {...props} />} />
        <Route path="/Contact"  render={props => <Contact {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
