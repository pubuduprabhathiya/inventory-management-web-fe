import React, { Component } from "react";
import { Redirect } from "react-router";
import {login } from "../../api/auth_api";




class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.getToken();
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    // alert("New Lecturer Registered!");
    event.preventDefault();

  }

  getToken = async()=>{
    console.log(this.state.email);
    let token = await login({email:this.state.email, password:this.state.password});
    console.log(token);
    return <Redirect to="/admin/dashboard" />
  }

 
  render() {

  
    return (
      <div className="d-flex justify-content-center">
        <form>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="indexNum"
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
              type="text"
              className="form-control"
              id="indexNum"
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
      
            <button type="submit m-1" className="btn btn-primary" onClick={this.getToken}>
              Submit
            </button>
         

          {/* <button type="submit m-1" className="btn btn-primary"> 
                  <Link to={"/admin/dashboard"} className="nav-link">
                    Submit
                  </Link>                  
                </button> */}

          <p>Forgot password? Get help</p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
