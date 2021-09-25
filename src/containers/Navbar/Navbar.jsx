import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() { 
        return (<header>
          <nav className="navbar navbar-dark bg-success p-3">
            <a className="navbar-brand" href="#">Inventory Management System</a>
           
            <Link to="/">
            <button type="button" className="btn btn-danger">Logout</button>
                </Link>
           
          </nav>
        </header> );
    }
}
 
export default NavBar;