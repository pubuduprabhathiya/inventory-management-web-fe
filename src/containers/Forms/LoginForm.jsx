import React, { Component } from 'react';

class LoginForm extends React.Component {
    render() { 
        return (
            <div className="d-flex justify-content-center">
            <form>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
                </div>
                <div className="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
                </div>
                <br />
                <button type="submit m-1" className="btn btn-primary">Submit</button>
              
                <p>Forgot password?  Get help</p>
          </form>
          </div>
        );
    }
}
 
export default LoginForm;