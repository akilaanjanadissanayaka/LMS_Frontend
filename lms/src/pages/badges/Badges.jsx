import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./badges.css"
const Badges = () => {
  return (
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="subject">
        <div class="details-content">
            <div class="header-container">
          <h2>Badges</h2>
          

          <div class="course-selection">
            <label for="course-selection"></label>
            <select
              name="course-selection"
              id="course-selection"
              class="course-dropdown"
            >
              <option value="" selected>
                A1
              </option>

              <option value="">A2</option>
            </select>
          </div>
          </div>

          <div class="button-container">
            <button
              type="button"
              value="Add Badge"
              class="add-btn"
              onclick="#"
            >
              Add Badge
            </button>
          </div>


    <div class='badge-details-container'>
        <h3 class='course-label'>{}</h3>

        <div class='badge-details'>
            <div class='badges'>


                <div class='badge'>
                <i class='fa fa-trash' aria-hidden='true' onclick=""></i>
                    <img alt='Badge Image'></img>
                    <span>badge name</span>
                </div>

            </div>
        </div>
    </div>

    <div class='content'>
        <div class='content-message'>
            <i class='fa fa-spinner' aria-hidden='true'></i>
            No course selected
        </div>
    </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Badges;
