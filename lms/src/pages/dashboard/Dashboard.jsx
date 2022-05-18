import React, { useState } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { fetchUserData } from "../../services/authenticationService";
import { Button } from "react-bootstrap";
import Charts from "../../components/chart/Chart";
import "./dashboard.css";
import { userData } from "../../data/Data";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = (props) => {
  const [data, setData] = useState({});

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        localStorage.clear();
        // props.history.push('/');
        window.location.href = "/";
      });
  }, []);

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
    // props.history.push('/');
  };

  return (
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="dashboard">
          {/* <h4>Hello {data && `${data.firstName} ${data.lastName}`}</h4> */}

          {data &&
            data.roles &&
            data.roles.filter((value) => value.roleCode === "ADMIN").length >
              0 && (
              <Button type="variant">
                Add User(You have admin previllages)
              </Button>
            )}
          <hr />
          <FeaturedInfo/>
          <Charts
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
