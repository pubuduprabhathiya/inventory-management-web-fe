import React, { Component } from 'react'
import CustomButton from '../../components/CustomButton';


class OfficeClerkSideMenu extends Component {
    constructor(props) {
        super(props);      
    }

    style1= {
        width: 250,
        height: 500,
        paddingTop: 19,
        paddingBottom: 175,
        paddingLeft: 37,
        paddingRight: 38,
        backgroundColor: "rgba(0, 135, 90, 1)",
        borderRadius: 18,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        };

    render() { 
        return ( 
            <div style={this.style1}>
                <h3 style={{color: "white"}}>Action</h3>
                <CustomButton/>
                <CustomButton/>
                <CustomButton/>
            </div>
        );
    }
}
 
export default OfficeClerkSideMenu;