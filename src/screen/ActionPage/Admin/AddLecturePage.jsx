import React, { Component } from "react";
import { withRouter } from "react-router";
import NewLectureApplication from "../../../containers/Forms/NewLectureApplication";

import NavBar from "../../../containers/Navbar/Navbar";
import AdminSideMenu from "../../../containers/SideMenu/AdminSideMenu";

class AddLecturePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.checkLogin();
  }
  // componentDidMount() {
  //   this.checkLogin();
  // }
  // checkLogin(){
  //   var type = localStorage.getItem('token');
  //   var user = localStorage.getItem('user');
  //   if(!type || user != "Admin"){
  //     this.props.history.push("/");
  //     return ;
  //   }
  // }
  render() {
    return (
      <div data-testid="add-lecturer-page">
        <NavBar />

        <div className="row m-5">
          <div className="col-4" align="center">
            <AdminSideMenu  currentTab="Add New Lecture"/>
          </div>
          <div className="col-8">
            <NewLectureApplication />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddLecturePage);
