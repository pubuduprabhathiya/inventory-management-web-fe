import React, { Component } from 'react';
import NavBar from '../../containers/Navbar/Navbar';

import { Link } from "react-router-dom";

class AdminDashboard extends Component {
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
                            <h3>Student Dashboard</h3>
                            <p>

                                <Link to={"/student/checkAvailability"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-plus-square fa-5x"></i><br />
                                       Check Availabilty
                                    </a>
                                </Link>
                                <Link to={"/student/createNormalRequest"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-check-square-o fa-5x"></i><br />
                                        Create Normal Request
                                    </a>
                                </Link>
                                <Link to={"/student/createTemporaryRequest"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-history fa-5x"></i><br />
                                        Tempory Request
                                    </a>
                                </Link>
                                <Link to={"/student/borrowingItems"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-search fa-5x"></i><br />
                                        Borrowing Item
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

export default AdminDashboard;