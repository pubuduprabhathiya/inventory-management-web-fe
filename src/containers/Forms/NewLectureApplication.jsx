import React, { Component } from "react";

class NewLectureApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastIndex:"L108",
      indexNumber: "",
      firstName: "",
      lastName:"",
      department: "",
      email: "",
      password: "",
      confirmPw:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  newStyle = {
    // margin: 40,
    padding: 30,
    background: " #bef1be",
    borderRadius: 20,
    width: "70%",
  };

  handleSubmit(event) {
    alert("New Lecturer Registered!");
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div style={this.newStyle}>
        <h3 style={{ textAlign: "center" }}>Lecturer Application</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group m-1 ">
              <label>Index Number: ( Last index: <b>{this.state.lastIndex}</b> )</label>
              <input
                type="text"
                className="form-control"
                placeholder="Index"
                required
                value={this.state.indexNumber}
                onChange={(event) => {
                  this.setState({
                    indexNumber: event.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="form-group m-1">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                required
                value={this.state.firstName}
                onChange={(event) => {
                  this.setState({
                    firstName: event.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="form-group m-1">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required
                value={this.state.lastName}
                onChange={(event) => {
                  this.setState({
                    lastName: event.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="form-group m-1">
              <label>Department:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                required
                value={this.state.department}
                onChange={(event) => {
                  this.setState({
                    department: event.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="form-group m-1">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Email"
                required
                value={this.state.email}
                onChange={(event) => {
                  this.setState({
                    email: event.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="form-group m-1">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                required
                value={this.state.password}
                onChange={(event) => {
                  this.setState({
                    password: event.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="form-group m-1">
              <label>Confirm Password:</label>
              <input
                type="Confirm password"
                className="form-control"
                id="Confirm password"
                placeholder="Re-Enter Password"
                required
                value={this.state.confirmPw}
                onChange={(event) => {
                  this.setState({
                    confirmPw: event.target.value,
                  });
                }}
              ></input>
            </div>

            <a
              href="#"
              className="btn btn-danger btn active m-3"
              role="button"
              aria-pressed="true"
            >
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewLectureApplication;
