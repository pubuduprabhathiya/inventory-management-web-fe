import React, { Component } from "react";
import AdminService from "../../api/admin_api"
class NewStudentApplication extends Component {
  constructor(props) {
    super(props);
    this.retrieveLastID();
    this.state = {
      lastIndex:"",
      index: "",
      firstName: "",
      lastName:"",
      department: "",
      email: "",
      password: "",
      confirmPw:""
    };

    this.createNewStudent = this.createNewStudent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.retrieveLastID();
  }

  retrieveLastID(){  
    AdminService.getLastStudent()
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
      this.createNewStudent();
    }
   
  }



  createNewStudent(){
    
    var newStudent = {
      index: this.state.index,
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      department: this.state.department
    }  ;
    AdminService.createStudent(newStudent)
      .then((response) => {
        
        
        this.setState({
          // lastIndex:this.state.index,
     
      index:"",
      firstName: "",
      lastName:"",
      department: "",
      email: "",
      password: "",
      confirmPw:""
         
        });
      
        if(response.code != 200){
          alert(response.message);          
        }else{
          alert("New Student Registered!");
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
    return (
      <div style={this.newStyle}>
        <h3 style={{ textAlign: "center" }}>Student Application</h3>
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

export default NewStudentApplication;
