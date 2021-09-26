import React, { Component } from "react";
import OldDamageItems from "../../../containers/OfficeClerkContainer/OldDamageItemList";
import NavBar from "../../../containers/Navbar/Navbar";
import OfficeClerkSideMenu from "../../../containers/SideMenu/OfficeClerkSideMenu";

class NewDamageRequestView extends Component {
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
            <OfficeClerkSideMenu currentTab="Repair History"/>
          </div>
          <div className="col-8">
            <OldDamageItems/>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDamageRequestView;
