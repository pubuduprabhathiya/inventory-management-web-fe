import React, { Component } from "react";
import PendingRepairItemList from "../../../containers/OfficeClerkContainer/PendingRepairItemList";
import NavBar from "../../../containers/Navbar/Navbar";
import OfficeClerkSideMenu from "../../../containers/SideMenu/OfficeClerkSideMenu";

class PendingRepairViewPage extends Component {
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
            <OfficeClerkSideMenu currentTab="Mark As Repaired"/>
          </div>
          <div className="col-8">
            <PendingRepairItemList/>
          </div>
        </div>
      </div>
    );
  }
}

export default PendingRepairViewPage;
