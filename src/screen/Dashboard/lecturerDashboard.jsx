import React, { Component } from 'react';
import NavBar from '../../containers/Navbar/Navbar';

import { Link } from "react-router-dom";

class LecturerDashboard extends Component {
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
                            <h3>Lecturer Dashboard</h3>
                            <p>

                                <Link to={"/lecturer/checkAvailability"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-calendar-check-o fa-5x"></i><br />
                                       Check Availabilty
                                    </a>
                                </Link>
                                <Link to={"/lecturer/createNormalRequest"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-pencil-square fa-5x"></i><br />
                                        Create Normal Request
                                    </a>
                                </Link>
                                <Link to={"/lecturer/createTemporaryRequest"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-pencil-square fa-5x"></i><br />
                                        Tempory Request
                                    </a>
                                </Link>
                                <Link to={"/lecturer/approveRequest"} >
                                    <a href="" className="btn btn-sq-lg btn-success p-4 m-4">
                                        <i className="fa fa-check-circle fa-5x"></i><br />
                                       Approve Request
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

export default LecturerDashboard;