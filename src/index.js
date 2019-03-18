import React from "react";
import ReactDOM from "react-dom";
import NavBars from "./components/NavBar";
import Launchpad from "./components/Launchpad";
import Payload from "./components/Payload";
import Missions from "./components/Missions";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBars />
        <Route path="/launchpad" component={Launchpad} />
        <Route path="/missions" component={Missions} />
        <Route path="/payload/:id" component={Payload} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
