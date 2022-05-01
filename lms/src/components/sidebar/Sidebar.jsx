import React from 'react';
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
    LineStyle,
    PermIdentity,
    BarChart,
    VerifiedUser,
    MenuBook
  } from "@material-ui/icons";

const Sidebar = () => {
    return (
        
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Menu</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
          <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon" />
            Dashboard
          </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Users</h3>
        <ul className="sidebarList">
          <Link to="/teachers" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Teachers
            </li>
          </Link>
          <Link to="/students" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Students
            </li>
          </Link>
          <Link to="/reports" className="link">
          <li className="sidebarListItem">
            <BarChart className="sidebarIcon" />
            Reports
          </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Courses</h3>
        <ul className="sidebarList">
          <Link to="/g6" className="link">
          <li className="sidebarListItem">
            <MenuBook className="sidebarIcon" />
            Grade 6
          </li>
          </Link>
          <Link to="/g7" className="link">
          <li className="sidebarListItem">
            <MenuBook className="sidebarIcon" />
            Grade 7
          </li>
          </Link>
          <Link to="/g8" className="link">
          <li className="sidebarListItem">
            <MenuBook className="sidebarIcon" />
            Grade 8
          </li>
          </Link>
          <Link to="/g9" className="link">
          <li className="sidebarListItem">
            <MenuBook className="sidebarIcon" />
            Grade 9
          </li>
          </Link>
          <Link to="/g10" className="link">
          <li className="sidebarListItem">
            <MenuBook className="sidebarIcon" />
            Grade 10
          </li>
          </Link>
          <Link to="/g11" className="link">
          <li className="sidebarListItem">
            <MenuBook className="sidebarIcon" />
            Grade 11
          </li>
          </Link>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Badges</h3>
        <ul className="sidebarList">
          <Link to="/ex" className="link">
          <li className="sidebarListItem">
            <VerifiedUser className="sidebarIcon" />
            ex
          </li>
          </Link>
        </ul>
      </div>
     
    </div>
  </div>
    );
};

export default Sidebar;