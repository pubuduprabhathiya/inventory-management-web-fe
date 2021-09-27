import React, { Component } from "react";

import {login } from "../../api/auth_api";

import jwt from 'jwt-decode';
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.getRoute();
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = async(event)=> {
    // alert("New Lecturer Registered!");
    event.preventDefault();
    const data = {
      email:this.state.email,
      password: this.state.password
    }
    let tokenData = await login(data);
    console.log(tokenData.data.token);
    const token = tokenData.data.token;
    if(token){
      localStorage.setItem('token',token);
      const user = jwt(token); //
      console.log(user.type);
      // localStorage.setItem('user',user.type);
      this.props.history.push(this.getRoute(user.type));
     
    }

  };

  getRoute (type){

    if(type == "Admin"){
      return "/admin/dashboard"
    }
    if(type == "Student"){
      return "/custom/dashboard"
    }
    if(type == "OfficeClerk"){
      return "/office-clerk/dashboard"
    }
    if(type == "TechnicalOfficer"){
      return "/custom/dashboard"
    }
    if(type == "Lecturer"){
      return "/custom/dashboard"
    }

    return "/";
 
  }

 
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
      
            <button type="submit m-1" className="btn btn-primary" >
              Submit
            </button>
        

          <p>Forgot password? Get help</p>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
