import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './subject.css'

const Subject = () => {
  return(
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
  <div className="subject">
    Subject
  </div>
  </div>
  </div>);
};

export default Subject;
