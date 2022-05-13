import React, { useState } from "react";
import { fetchUserData } from "../../services/authenticationService";
import "./topbar.css";
import { NotificationsNone, ExitToApp, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [data, setData] = useState({});

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        localStorage.clear();
      });
  }, []);

  //log out and clear local storage
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
    // props.history.push('/');
  };
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
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <div className="topbarIconContainer">
            <ExitToApp onClick={() => logOut()} />
          </div>
          {data && `${data.firstName} ${data.lastName}`}
          <Link to="/profile">
            <img src="" alt="" className="topAvatar" />
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Topbar;
