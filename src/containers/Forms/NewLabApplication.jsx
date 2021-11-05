import React, { Component } from "react";
import AdminService from "../../api/admin_api";

// import {  Link } from "react-router-dom";
// import * as actions from '../../store/actions/auth.js';
// import { connect } from 'react-redux';

class NewLabApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labName: "",
      department: "",
      isError: false,
      msg:"",
      isSuccess: false
    };
    this.createLab = this.createLab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



 

  handleSubmit(event) {
    alert("Are you sure?");
    event.preventDefault();
    console.log(this.state);
    this.createLab();
  
   
  }



  createLab(){
    
    var newClerk = {
      labName: this.state.labName,
      department: this.state.department,
    };

    AdminService.createLaboratory(newClerk)
      .then((response) => {
        
        console.log(response);
        this.setState({         
          labName: "",
          department: "",         
        });
        if(response.code != 200){
          this.setState({
            isError:true,
            isSuccess:false,
            msg: response.message
          });
          // alert(response.message);          
        }else{
          // alert("New Laboratory is Registered!");
          this.setState({
            isSuccess:true,
            isError:false,         
            msg: "New Laboratory is Registered!"
          });
          // window.location.reload();
        }        
      })
      .catch((e) => {
        alert("Server Error! Try again later!");
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
        <h3 style={{ textAlign: "center" }}>Laboratory Application</h3>
        {this.state.isError ? <div className="alert alert-danger">
            <strong>Error!</strong> {this.state.msg}.
        </div> : null}
        {this.state.isSuccess ? <div className="alert alert-primary">
            <strong>Success!</strong> New Laboratory is Registered!
        </div> : null}
        <div>
          <form onSubmit={this.handleSubmit}>
            
            <div className="form-group m-1">
              <label>Lab Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Lab Name"
                required
                value={this.state.labName}
                onChange={(event) => {
                  this.setState({
                    labName: event.target.value,
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


// const mapStateToProps = state => {
//   return {
//     loading: state.reducer.loading,
//     error: state.reducer.error,
//     isAuthenticated: !(state.reducer.token === null || state.reducer.token === undefined),
//     token: state.reducer.token,
//     // authRedirectPath: state.reducer.authRedirectPath
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAuth: (email, password) => dispatch(actions.auth(email, password)),
//     onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
//   };
// };

export default NewLabApplication;
