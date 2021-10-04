import React, { Component } from "react";
import NewDamageItems from "../../../containers/OfficeClerkContainer/NewDamageItemList";
import NavBar from "../../../containers/Navbar/Navbar";
import OfficeClerkSideMenu from "../../../containers/SideMenu/OfficeClerkSideMenu";
import { withRouter } from "react-router-dom";

class NewDamageRequestView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.checkLogin();
  }
  componentDidMount() {
    this.checkLogin();
  }
  checkLogin(){
    var type = localStorage.getItem('token');
    var user = localStorage.getItem('user');
    if(!type || user != "OfficeClerk"){
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
            <OfficeClerkSideMenu currentTab="New Damage Item"/>
          </div>
          <div className="col-8">
            <NewDamageItems/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewDamageRequestView);
