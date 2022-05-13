import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const UserList = () => {
  return (
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
    <div className="user">
      Users(Add table here...)
    </div>
    </div>
    </div>

  );
};

export default UserList;