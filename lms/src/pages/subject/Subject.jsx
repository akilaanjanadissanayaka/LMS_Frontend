import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./subject.css";

const Subject = () => {
  return (
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="subject">
          <div class="details-container">
            <h2>Course Details</h2>

            <div class="filter-container">
              <form class="search-bar" id="search">
                <label for="search"></label>
                <input
                  type="text"
                  placeholder="Search by course name.. &#xF002;"
                ></input>
              </form>

              <button
                class="add-button"
                onclick="location.href='<?php echo BASEURL . '/addNewCourse/index' ?>'"
              >
                Add New Course
              </button>
            </div>

            <div class="year-selection" id="year-selection">
              <label for="year">Select the year</label>
              <select name="year" id="year">
                <option value="all" selected>
                  All years
                </option>
                <option value="1">1st year</option>
                <option value="2">2nd year</option>
                <option value="3">3rd year</option>
                <option value="4">4th year</option>
              </select>
            </div>

          </div>

          <div class="table-container">
        <table class="content-table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Course name</th>
                    <th>Year</th>
                    <th>No.of students</th>
                    <th>Action </th>
                </tr>
            </thead>

            <tbody id="table-content">

                    <tr>
                    <td>123</td>
                    <td>AUTOMATA</td>
                    <td>2</td>
                    <td>200</td>
                    <td>

                    <button type='button' class='button' onclick="">
                   
                    <span class='button__text'>View Course</span>
                    </button>

                    </td>
                    </tr>

                
                

            </tbody>

        </table>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
