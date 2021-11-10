import React, { Component } from 'react';
import CustomConfirm from '../../containers/Alert/CustomAlertDialog';
// import ConfirmationAlert from '../../containers/Alert/CustomAlertDialog';
import NavBar from '../../containers/Navbar/Navbar';
// import NewDamageItemList from '../../containers/OfficeClerkContainer/NewDamageItemList';
// import OfficeClerkSideMenu from '../../containers/SideMenu/OfficeClerkSideMenu';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class OfficeClerkDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
   
  }
 

  render() {
    return (
      <div>
        <NavBar />

        <div className="container">
          <div className="row">
            <div className="col-lg-12" align="center">
              <br />
              <h3>Office Clerk Dashboard</h3>
              <p>

                <Link to={"/office-clerk/new-damage"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-plus-square fa-5x"></i><br />
                    New Damage Items
                  </a>
                </Link>
                <Link to={"/office-clerk/pending-damage"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-check-square-o fa-5x"></i><br />
                    Mark As Repair
                  </a>
                </Link>
                <Link to={"/office-clerk/old-damage"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-history fa-5x"></i><br />
                    Repair History
                  </a>
                </Link>
                <Link to={"/office-clerk/item-list"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-search fa-5x"></i><br />
                    Check Availability
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

export default withRouter(OfficeClerkDashboard);