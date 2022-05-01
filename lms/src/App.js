import React from "react";
import "./app.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import Subject from "./pages/subject/Subject";
import Report from "./pages/report/Report";
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
      <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard/>}></Route>
          <Route path="/users" element={<User/>}></Route>
          <Route path="/subjects" element={<Subject/>}></Route>
          <Route path="/reports" element={<Report/>}></Route>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
