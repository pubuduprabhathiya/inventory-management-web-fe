import React, { Component } from "react";
import {  Link } from "react-router-dom";


import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

    };
    // this.getRoute();
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.togglePop = this.togglePop.bind(this);
  }

  componentDidMount() {
    if (this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    }
  }

  // togglePop = () => {
  //   this.setState({
  //     seen: !this.state.seen
  //   });
  // };

  handleSubmit = async (event) => {
    // alert("New Lecturer Registered!");
    event.preventDefault();
    await this.props.onAuth(this.state.email, this.state.password);
    // console.log("abc"+this.props.error );
    // if (this.props.error != null) {
    //   alert(this.props.error + "aa");
    //   alert(this.state.seen);
    //   this.setState({
    //     seen:true,
    //     error: this.props.error
    //   });
     
    // }

  };



  render() {
    return (
      <div className="d-flex justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              value={this.state.email}
              onChange={(event) => {
                this.setState({
                  email: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={(event) => {
                this.setState({
                  password: event.target.value,
                });
              }}
            ></input>
          </div>
          <br />

          <button type="submit m-1" className="btn btn-primary">
            Submit
          </button>
 
          <Link to={"/help"} >
                <a href="">
                <p>Forgot password? Get help</p>
                </a>
            </Link>

         
        </form>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.reducer.loading,
    error: state.reducer.error,
    isAuthenticated: !(state.reducer.token === null || state.reducer.token === undefined),
    token: state.reducer.token,
    // authRedirectPath: state.reducer.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
