import React, { Component } from "react";
import { withRouter } from "react-router";
import NewTechnicalOfficerApplication from "../../../containers/Forms/NewTechOfficerApplication";

import NavBar from "../../../containers/Navbar/Navbar";
import AdminSideMenu from "../../../containers/SideMenu/AdminSideMenu";



class AddTechnicalOfficerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.checkLogin();
  }

  componentDidMount() {
    this.checkLogin();
  }
  checkLogin(){
    var type = localStorage.getItem('token');
    var user = localStorage.getItem('user');
    if(!type || user != "Admin"){
      this.props.history.push("/");
      return ;
    }
  }

 


  render() {
    return (
      <div>
        <NavBar />

        <div className="row m-5">
          <div className="col-4" align="center">
            <AdminSideMenu currentTab="Add New Technical Officer"/>
          </div>
          <div className="col-8">
            
            <NewTechnicalOfficerApplication />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddTechnicalOfficerPage);
