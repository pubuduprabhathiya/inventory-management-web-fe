import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.logout = this.logout.bind(this);
  }

  logout(){
    
    this.props.onLogout();
  
  }

  render() { 
    return (<header>
      <nav className="navbar navbar-dark bg-success p-3">
        <a className="navbar-brand" href="/">Inventory Management System</a> 
        <button type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
           
       
      </nav>
    </header> );
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: !(state.token === null || state.token === undefined),
      user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onLogout: () => dispatch(actions.logout('/'))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);