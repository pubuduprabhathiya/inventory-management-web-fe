import React, { Component } from "react";
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

import Main from './screen/Main';



class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Main />
      </div>     
    );
  } 

}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( null, mapDispatchToProps )( App ) );


