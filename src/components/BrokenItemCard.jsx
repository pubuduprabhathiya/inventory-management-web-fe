import React, { Component } from 'react';

class BrokenItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    style1 = {
        width: 1029,
        height: 326,
    }
    style2 = {
        width: 1029,
         height: 326,
         backgroundColor: "rgba(196, 196, 196, 1)",
          borderRadius: 13,
         position: "relative"
    }
    style3 = {
        width: 330,
         height: 250,
         left: 38,
         top: 38,
         position: "absolute",
          borderRadius: 15,
    }

    style4 ={
        width: 209.06,
        height: 235.11,
        left: 341.28,
        top: 62.05,
        position: "absolute",
         fontSize: 28,
        fontWeight: 500,
         lineHeight: "100%",
          textAlign: "right",
           color: "rgba(102, 91.55, 91.55, 1)",
    }

    style4 ={
        width: 209.06,
        height: 235.11,
        left: 341.28,
        top: 62.05,
        position: "absolute",
         fontSize: 28,
        fontWeight: 500,
         lineHeight: "100%",
          textAlign: "right",
           color: "rgba(102, 91.55, 91.55, 1)",
    }
    style5 ={
        width: 336.76,
        height: 242.38,
        left: 567,
        top: 65,
        position: "absolute",
         fontSize: 28,
        fontWeight: 700, lineHeight: "100%",
         color: "black",
    }
    render() { 
        return ( 
            <div>
                <div style={this.style1}>
                    <div style={this.style2}>
                        <img style={this.style3} src="https://via.placeholder.com/330x250"/>
                        <p style={this.style4}>Category:<br/>Model : <br/>Store Code:<br/>Lab Name:<br/>Issue:<br/>Open Date</p>
                        <p style={this.style5}>Projector<br/>CA124-B<br/>NA255<br/>CSE Level 1 Lab<br/>Stand Broken<br/>2020-10-09</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BrokenItemCard;