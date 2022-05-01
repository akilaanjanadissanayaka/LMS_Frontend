import React from "react";
import "./app.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
function App() {
  return (
    <BrowserRouter>
    <Topbar />
    <Sidebar />
      <Routes>
        <Route exact path="/" element={""}></Route>
        <Route path="/" element={""}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
