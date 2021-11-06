// import classes from './HeaderButton.module.css';

// const HeaderButton = (props)=>{
//     return(
//         <button className={classes.button}>LogOut</button>
//     );
// }


import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import {Redirect} from "react-router-dom";

class HeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.isAuthenticated
    }
    this.logout = this.logout.bind(this);
  }

  async logout(){    
    
    this.setState({
      isLogin: false,
    },()=>{
      this.props.onLogout();
    });
    
  }

  render() { 
   
    return (
        <div>
      
        <button type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
        {this.state.isLogin ? null : <Redirect to="/" /> }
  
        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.reducer.token);
  return {
      isAuthenticated: !(state.reducer.token === null || state.reducer.token === undefined),
      // user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onLogout: () => dispatch(actions.logout('/'))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(HeaderButton);

// export default HeaderButton;