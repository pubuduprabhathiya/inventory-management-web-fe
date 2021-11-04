import React, { Component } from "react";
import ItemListView from "../../../containers/OfficeClerkContainer/CheckAvailabilityList";
import NavBar from "../../../containers/Navbar/Navbar";
import OfficeClerkSideMenu from "../../../containers/SideMenu/OfficeClerkSideMenu";
import { withRouter } from "react-router-dom";
class CheckAvailabilityView extends Component {
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
            <OfficeClerkSideMenu currentTab="Check Availability"/>
          </div>
          <div className="col-8">
            <ItemListView/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckAvailabilityView);
