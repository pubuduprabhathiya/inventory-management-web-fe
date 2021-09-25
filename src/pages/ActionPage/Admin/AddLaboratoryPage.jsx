import React, { Component } from "react";
import NewLabApplication from "../../../containers/Forms/NewLabApplication";
import NavBar from "../../../containers/Navbar/Navbar";
import AdminSideMenu from "../../../containers/SideMenu/AdminSideMenu";

class AddLaboratory extends Component {
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
            <AdminSideMenu currentTab="Add New Laboratory"/>
          </div>
          <div className="col-8">
            <NewLabApplication />
          </div>
        </div>
      </div>
    );
  }
}

export default AddLaboratory;
