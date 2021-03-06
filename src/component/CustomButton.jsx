import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tabName: this.props.tabName,
            isActive: this.props.isActive,
            url: this.props.url
        }
    }

    style={
     margin:5,
  padding:5 
    }

    render() { 
        return ( 
            // <div>
            //     <div style={this.style1}>
            //         <div style={this.style1}>
            //         <p style={{width: '100px', height: '38px', fontSize: '16px', fontWeight: 500, lineHeight: '100%', textAlign: 'center', color: 'rgba(222.06, 222.06, 222.06, 1)'}}>Add Student</p>
            //         </div>
            //     </div>
            // </div>
            // <div style={this.style}> 
            //     <button type="button" className="btn btn-dark">Action 1</button>
            // </div>
            <div>
                <Link to={this.state.url}>
                <button type="button" className={this.getButtonClass(this.state.isActive)}>{this.state.tabName}</button>
                </Link>                
            </div>
         );
    }
    getButtonClass (isActive){
        if(isActive){
            return "btn btn-primary m-2"
        }else{
            return "btn btn-dark m-2";

        }
    };
}
 
export default CustomButton;