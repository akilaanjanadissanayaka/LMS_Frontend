import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from "../../components/chart/Chart"
import "./dashboard.css";
import { userData } from '../../data/Data';


const Dashboard = () => {
  return <div className="dashboard">
      <FeaturedInfo/>
      <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>;
};

export default Dashboard;
