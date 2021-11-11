

import React, { Component } from 'react';
import LoginForm from '../../containers/Forms/LoginForm';


class Login extends Component {

    style1 ={
     
        height: 760
    };
    style2 ={
        width: 300,
         height: 300,
        margin: 20,
        
    };
    style3 ={
        backgroundColor:"#71dcbe",
        //  margin: 20,
         padding: 10,
        borderRadius: 10,
        marginRight:40,
        width:250
    };

    render() { 
        return ( 
            
            <div data-testid="gg" className="container-fluid bg-success">
                <h1 id="ghg">ggggg</h1>
                <div className="row" style={this.style1} >
                    <div className="col-sm-8 my-auto" >
                        <div className="d-flex justify-content-center" >
                            <img src="https://firebasestorage.googleapis.com/v0/b/perks-test-25b3c.appspot.com/o/logo.png?alt=media&token=0ab4c9fa-b155-45ec-86fd-0006e462cc23" style={this.style2} />
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