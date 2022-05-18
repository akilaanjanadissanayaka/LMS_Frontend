import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./newcourse.css";

const NewCourse = () => {
  return (
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newcourse">
          <div class="wrapper center">
            <div class="form-container">
              <div class="slide"> ADD NEW COURSE</div>

              <div class="form-inner">
                <form
                  method="post"
                  action="<?php echo BASEURL . '/addNewCourse/index'; ?>"
                  class="login"
                  id="registerForm"
                  onsubmit="validateAll()"
                >
                  <div class="field" id="courseField">
                    <label for="c_name"></label>
                    <input
                      type="text"
                      placeholder="Course Name"
                      name="c_name"
                      id="c_name"
                      onfocusout="validateCourseName()"
                    />
                    <div class="error" id="error"></div>
                  </div>
                  <div class="field">
                    <label for="year-selection"></label>
                    <select
                      name="year-selection"
                      id="year-selection"
                      class="year-dropdown"
                      placeholder="Year"
                    >
                      <option value="">--All years--</option>
                      <option value="1">Year 1</option>
                      <option value="2">Year 2</option>
                      <option value="3">Year 3</option>
                      <option value="4">Year 4</option>
                    </select>
                    <div class="error" id="error"></div>
                  </div>

                  {/* <div class="field-long">
                <label for="c_desc"></label>
                <textarea placeholder="Course Description" name="c_desc" id="c_desc" rows="10" cols="30" onfocusout="validateCourseDescription()"></textarea>
                <div class="error" id="error">

                </div>
            </div> */}
                  <br></br>

                  <div class="field btn">
                    <div class="btn-layer"></div>
                    <input type="submit" value="Register" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourse;
