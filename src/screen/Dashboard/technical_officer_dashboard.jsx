import React, { Component } from 'react';
import CustomConfirm from '../../containers/Alert/CustomAlertDialog';
// import ConfirmationAlert from '../../containers/Alert/CustomAlertDialog';
import NavBar from '../../containers/Navbar/Navbar';
// import NewDamageItemList from '../../containers/OfficeClerkContainer/NewDamageItemList';
// import OfficeClerkSideMenu from '../../containers/SideMenu/OfficeClerkSideMenu';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class TechnicalOfficerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.checkLogin();
  }
  componentDidMount() {
    this.checkLogin();
  }
  checkLogin() {
    var type = localStorage.getItem('token');
    var user = localStorage.getItem('user');
    if (!type || user != "OfficeClerk") {
      this.props.history.push("/");
      return;
    }
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="container">
          <div className="row">
            <div className="col-lg-12" align="center">
              <br />
              <h3>Technical Officer Dashboard</h3>
              <p>

                <Link to={"/technicalofficer/viewtrackofequipment"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-eye fa-5x"></i><br />
                    view track of equipment
                  </a>
                </Link>
                <Link to={"/technicalofficer/issueequipment"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-cart-plus fa-5x"></i><br />
                    issue equipment
                  </a>
                </Link>
                <Link to={"/technicalofficer/acceptequipment"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-check-square fa-5x"></i><br />
                    accept equipment
                  </a>
                </Link>
                <Link to={"/technicalofficer/addupdateequipment"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-plus-square fa-5x"></i><br />
                    add update eequipment
                  </a>
                </Link>
                <Link to={"/technicalofficer/report"} >
                  <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                    <i className="fa fa-history fa-5x"></i><br />
                    report
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

export default withRouter(TechnicalOfficerDashboard);