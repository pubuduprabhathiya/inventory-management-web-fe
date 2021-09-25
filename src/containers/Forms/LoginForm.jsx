import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("New Lecturer Registered!");
    event.preventDefault();
    console.log(this.state);
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
          <Link to={"/admin/dashboard"}>
            <button type="submit m-1" className="btn btn-primary">
              Submit
            </button>
          </Link>

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
