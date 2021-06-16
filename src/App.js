import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
// other comps
import Cam from "./Components/Cam";
import Mic from "./Components/Mic";
import Userarea from "./Components/UserInteraction";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App  w-screen flex ">
      <Nav />
      <div className="w-8/12   h-screen bg-gray-600 text-white">
        <Cam />
        <Mic />
      </div>
      {/* work on mic volume seperately and we will combine inside cam later */}
      <div className="">
        <Userarea />
      </div>
    </div>
  );
}

export default App;
