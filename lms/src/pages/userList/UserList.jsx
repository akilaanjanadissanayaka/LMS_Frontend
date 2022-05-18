import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./userList.css";
const UserList = () => {
  return (
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="user">
          <div class="user-type">
            <button id="all" class="type active-type">
              All users
            </button>
            <button id="lec" class="type">
              Lecturers
            </button>
            <button id="stu" class="type">
              Students
            </button>
          </div>
          <div className="table-container">
            <h3>Lectures</h3>
            <table className="content-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>User type</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody id="table-content">
                <tr>
                  <th>123</th>
                  <th>Chathura</th>
                  <th>Manohara</th>
                  <th>Student</th>
                  <th> </th>
                </tr>
              </tbody>
            </table>

            <h3>Students</h3>
            <table className="content-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>User type</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody id="table-content">
                <tr>
                  <th>123</th>
                  <th>Chathura</th>
                  <th>Manohara</th>
                  <th>Student</th>
                  <th> </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
