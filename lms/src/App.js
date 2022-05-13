import React, { useState } from "react";
import "./app.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Subject from "./pages/subject/Subject";
import Report from "./pages/report/Report";
import UserList from "./pages/userList/UserList";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/testpage/TestPage";

function App() {

  return (
  
    <BrowserRouter>
      {/* <Topbar /> */}
      {/* <div className="container"> */}
        {/* <Sidebar/> */}
        <Routes>
          <Route exact path="/" element={<LoginPage/>}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/subjects" element={<Subject />}></Route>
          <Route path="/reports" element={<Report />}></Route>
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
