import React, { Component } from "react";
import NewStudentApplication from "../../../containers/Forms/NewStudentApplication";

import NavBar from "../../../containers/Navbar/Navbar";
import AdminSideMenu from "../../../containers/SideMenu/AdminSideMenu";

class AddStudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />

        <div className="row m-5">
          <div className="col-4" align="center">
            <AdminSideMenu currentTab="Add New Student"/>
          </div>
          <div className="col-8">
            <NewStudentApplication />
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudentPage;
