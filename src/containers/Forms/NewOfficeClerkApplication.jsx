import React, { Component } from "react";
import AdminService from "../../api/admin_api";
class NewOfficeClerkApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastIndex:"",
      index: "",
      firstName: "",
      lastName:"",
      email: "",
      password: "",
      confirmPw:"",
      isError: false,
      msg:"",
      isSuccess: false
    };
    // this.retrieveLastID();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createOfficeClerk = this.createOfficeClerk.bind(this);
  }

  componentDidMount() {
    this.retrieveLastID();
  }

  retrieveLastID(){  
    AdminService.getLastOfficeClerk()
      .then((response) => {
        this.setState({
          lastIndex: response.data[0].id,
         
        });
      
        // console.log(response.data[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }

 

  handleSubmit(event) {
    alert("Are you sure?");
    event.preventDefault();
    console.log(this.state);
    if(this.state.password != this.state.confirmPw){
      alert("Password not match with confirm password");
    }else{
      this.createOfficeClerk();
    }
   
  }



  createOfficeClerk(){
    
    var newClerk = {
      index: this.state.index,
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }  ;
    AdminService.createOfficeClerk(newClerk)
      .then((response) => {
       
        
        this.setState({
          // lastIndex:this.state.index,
     
      index:"",
      firstName: "",
      lastName:"",
      email: "",
      password: "",
      confirmPw:""
         
        });

        if(response.code != 200){
          this.setState({
            isError:true,
            isSuccess:false,
            msg: response.message
          });     
        }else{
          this.setState({
            isSuccess:true,
            isError:false,
            msg: "New Office Clerk Registered!"
          });
         
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
    return (
      <div style={this.newStyle}>
        <h3 style={{ textAlign: "center" }}>Office Clerk Application</h3>
        {this.state.isError ? <div className="alert alert-danger">
            <strong>Error!</strong> {this.state.msg}.
        </div> : null}
        {this.state.isSuccess ? <div className="alert alert-primary">
            <strong>Success!</strong> New Office Clerk Registered!"
        </div> : null}
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group m-1 ">
              <label>Index Number: ( Last index: <b>{this.state.lastIndex}</b> )</label>
              <input
                type="text"
                className="form-control"
                placeholder="Index"
                required
                value={this.state.index}
                onChange={(event) => {
                  this.setState({
                    index: event.target.value,
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
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewOfficeClerkApplication;
