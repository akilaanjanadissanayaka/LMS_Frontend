import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './report.css';

const Report = () => {
    return(
        <div className="body">
          <Topbar />
          <div className="container">
            <Sidebar />
      <div className="report">
        Report
      </div>
      </div>
      </div>);
};

export default Report;