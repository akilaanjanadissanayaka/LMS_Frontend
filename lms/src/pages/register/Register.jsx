import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./register.css";
const Register = () => {
  return (
    <div className="body">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="register">
          <div class="wrapper center">
            <div class="form-container">
              <div class="slide-controls">
                <input type="radio" name="slide" id="login" checked></input>
                <input type="radio" name="slide" id="signup"></input>
                <label for="login" class="slide login">
                  Lecturer
                </label>
                <label for="signup" class="slide signup">
                  Student
                </label>
                <div class="slider-tab"></div>
              </div>

              <div class="form-inner">
                <form
                  method="post"
                  action="<?php echo BASEURL . '/register/index'; ?>"
                  class="login"
                  id="registerForm"
                  onsubmit="validateAll()"
                >
                  <input type="hidden" name="type" value="2" />

                  <div class="field">
                    <label for="email"></label>
                    <input
                      type="text"
                      placeholder="Email Address"
                      name="email"
                      id="email"
                      onfocusout="validateEmail()"
                    ></input>
                    <div class="error" id="error">
                       
                    </div>
                  </div>

                  <div class="field">
                    <label for="regNo"></label>
                    <input
                      type="text"
                      placeholder="Employee No"
                      name="regNo"
                      id="regNo"
                      onfocusout="validateEmployeeNo()"
                    ></input>
                    <div class="error" id="error">
                       
                    </div>
                  </div>

                  <div class="field">
                    <label for="fName"></label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="fName"
                      id="fName"
                      onfocusout="validateFirstName()"
                    ></input>
                    <div class="error" id="error">
                       
                    </div>
                  </div>

                  <div class="field">
                    <label for="lName"></label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lName"
                      id="lName"
                      onfocusout="validateLastName()"
                    ></input>
                    <div class="error" id="error">
                       
                    </div>
                  </div>

                  <div class="field btn">
                    <div class="btn-layer"></div>
                    <input type="submit" value="Add Lecturer"></input>
                  </div>
                </form>

                <form
                  method="post"
                  action="<?php echo BASEURL . '/register/index'; ?>"
                  class="login"
                  id="registerForm1"
                  onsubmit="validateAll1()"
                >
                  <input type="hidden" name="type" value="3" />

                  <div class="field">
                    <label for="email1"></label>
                    <input
                      type="text"
                      placeholder="Email Address"
                      id="email1"
                      onfocusout="validateEmail1()"
                    ></input>
                    <div class="error" id="error">
                      email
                    </div>
                  </div>

                  <div class="field">
                    <label for="regNo1"></label>
                    <input
                      type="text"
                      placeholder="Index No"
                      name="regNo"
                      id="regNo1"
                      onfocusout="validateEmployeeNo1()"
                    ></input>
                    <div class="error" id="error">
                      reg
                    </div>
                  </div>

                  <div class="field">
                    <label for="fName1"></label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="fName"
                      id="fName1"
                      onfocusout="validateFirstName1()"
                    ></input>
                    <div class="error" id="error">
                      fname
                    </div>
                  </div>

                  <div class="field">
                    <label for="lName1"></label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lName"
                      id="lName1"
                      onfocusout="validateLastName1()"
                    ></input>
                    <div class="error" id="error">
                      lname
                    </div>
                  </div>

                  <div class="field btn">
                    <div class="btn-layer"></div>
                    <input type="submit" value="Add Student"></input>
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

export default Register;
