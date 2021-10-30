import React, { Component } from "react";
import AdminService from "../../api/admin_api";

class UpdateUserApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      firstName: "",
      lastName: "",      
      email: "",
      password: "",
      confirmPw: "",
      isSearch : false
    };
    this.retrieveUser = this.retrieveUser.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentDidMount() {
 
  }

  


  handleChange(event) {
    // console.log(this.state.labId);
    this.setState({ email: event.target.value });
  }

  handleSearch(event) {
    alert("Are you sure?");
    event.preventDefault();
    console.log(this.state);
    
    if (this.state.email == "") {
      alert("Please enter correct mail");
      return;
    }
    this.setState({
        isSearch: true
    });
    this.retrieveUser(this.state.email);    
  }

  retrieveUser(email) {
    var emailData = {        
        email: email,
      };
    AdminService.getUserData(emailData)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  handleSubmit(event) {
    alert("Are you sure?");
    
    console.log(this.state);
    
    if (this.state.password != this.state.confirmPw) {
      alert("Password not match with confirm password");
    } else {
      this.updatePassword();
      event.preventDefault();
    }
  }


  updatePassword() {
    var updatedUser = {
      email: this.state.email,
      password: this.state.password,
 
    };
    AdminService.updatePassword(updatedUser)
      .then((response) => {
        this.setState({
       
          isSearch : false
        });

        if(response.code != 200){
          alert(response.message);          
        }else{
          alert("password change");
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newStyle = {
    // margin: 40,
    padding: 30,
    background: " #bef1be",
    borderRadius: 20,
    width: "70%",
  };

  render() {
      if(!this.state.isSearch){
        return (
            <div style={this.newStyle}>
              <h3 style={{ textAlign: "center" }}>Update User Password</h3>
              <div>
                <form onSubmit={this.handleSearch}>                          
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
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </form>
              </div>
            </div>
          );
      }else{
        return (
            <div style={this.newStyle}>
              <h3 style={{ textAlign: "center" }}>Update User Password</h3>
              <div>
                <form onSubmit={this.handleSubmit}>
                  
                  <div className="form-group m-1">
                    <label>First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      required
                      disabled
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
                      disabled
                      value={this.state.lastName}
                      onChange={(event) => {
                        this.setState({
                          lastName: event.target.value,
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
                      disabled
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
                      type="password"
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
                    href=""
                    className="btn btn-danger btn active m-3"
                    role="button"
                    aria-pressed="true"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </form>
              </div>
            </div>
          );
      }
    
  }
}

export default UpdateUserApplication;
