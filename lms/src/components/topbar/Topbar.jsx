import React from "react";
import "./topbar.css";
import { NotificationsNone, ExitToApp, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">INSTITUTE-LMS</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <ExitToApp />
          </div>
          <Link to="/profile">
          <img
            src=""
            alt=""
            className="topAvatar"
          /></Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
