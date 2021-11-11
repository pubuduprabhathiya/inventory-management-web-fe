import React, { Component } from 'react';
import CustomConfirm from '../../containers/Alert/CustomAlertDialog';
// import ConfirmationAlert from '../../containers/Alert/CustomAlertDialog';
import NavBar from '../../containers/Navbar/Navbar';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }


  render() {
    return (
      <div data-testid="admindashboard">
        <NavBar />
        <div className="container">
          <div className="row">

            <div className="col-lg-12" align="center">
              <br />
              <h3>Admin Dashboard</h3>
              <p>
                <Link to={"/admin/add-student"} data-testid="addStudentButton" >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-graduation-cap fa-5x"></i><br />
                    Add Student
                  </a>

                </Link>
                <Link to={"/admin/add-lecture"} data-testid="addLecturerButton">
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-user fa-5x"></i><br />
                    Add Lecture
                  </a>
                </Link>
                <Link to={"/admin/add-technical-officer"} data-testid="addTechOfficerButton">
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-cogs fa-5x"></i><br />
                    Add Technical Officer
                  </a>
                </Link>
                <Link to={"/admin/add-office-clerk"} data-testid="addOfficeClerkButton">
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-wrench fa-5x"></i><br />
                    Add Office Clerk
                  </a>
                </Link>
                <Link to={"/admin/add-laboratory"} data-testid="addLabButton">
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-flask fa-5x"></i><br />
                    Add Laboratory
                  </a>
                </Link>
                <Link to={"/admin/update-password"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-lock fa-5x"></i><br />
                    Update Password
                  </a>
                </Link>

              </p>
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default withRouter(AdminDashboard);