

import React, { Component } from 'react';
import LoginForm from '../../containers/Forms/LoginForm';


class Login extends Component {

    style1 ={
        backgroundColor:"green",
        height: 670
    };
    style2 ={
        width: 200,
         height: 200,
        margin: 20,
        
    };
    style3 ={
        backgroundColor:"#71dcbe",
         margin: 20,
         padding: 10,
        borderRadius: 10,
        marginRight:40
    };

    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row" style={this.style1} >
                    <div className="col-sm-8 my-auto" >
                        <div className="d-flex justify-content-center" >
                            <img src="logo.png" style={this.style2} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h2 style={{color: "white"}}>SE Inventory management system</h2>
                        </div>
                    </div>

                    <div className="col-sm-4 my-auto"  align="center">
		                <div  style={this.style3}>
                            <div >
                                <h3>User Login</h3>
                            </div>
			                <LoginForm/>
      	                </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;