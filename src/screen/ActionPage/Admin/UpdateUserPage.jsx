import React, { Component } from "react";
import { withRouter } from "react-router";
import UpdateUserApplication from "../../../containers/Forms/UpdateUserApplication";

import NavBar from "../../../containers/Navbar/Navbar";
import AdminSideMenu from "../../../containers/SideMenu/AdminSideMenu";



class UpdateUserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }



 


  render() {
    return (
      <div>
        <NavBar />

        <div className="row m-5">
          <div className="col-4" align="center">
            <AdminSideMenu currentTab="Update User Password"/>
          </div>
          <div className="col-8">
            
            <UpdateUserApplication />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateUserPage);
