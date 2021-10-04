import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.logout = this.logout.bind(this);
  }

  logout(){
    localStorage.setItem('token','');
    localStorage.setItem('user','');
    this.props.history.push("/");
  }

  render() { 
    return (<header>
      <nav className="navbar navbar-dark bg-success p-3">
        <a className="navbar-brand" href="#">Inventory Management System</a>
       
   
        <button type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
           
       
      </nav>
    </header> );
  }
}
 
export default withRouter(NavBar);