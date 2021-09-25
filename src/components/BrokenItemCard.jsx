import React, { Component } from 'react';

class BrokenItemCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {  }
    }

    style1 = {
        width: "100%",
        height: 250,
        cursor: "pointer"
    }
    style2 = {
        width: "100%",
         height: 250,
         backgroundColor: "rgba(196, 196, 196, 1)",
          borderRadius: 13,
         position: "relative"
    }
    style3 = {
        width: 230,
         height: 180,
         left: 38,
         top: 38,
         position: "absolute",
          borderRadius: 15,
    }


    style4 ={
        width: 209.06,
        height: 235.11,
        left: 270.28,
        top: 62.05,
        position: "absolute",
         fontSize: 20,
        fontWeight: 500,
         lineHeight: "100%",
          textAlign: "right",
           color: "rgba(102, 91.55, 91.55, 1)",
    }
    style5 ={
        width: 336.76,
        height: 242.38,
        left: 500,
        top: 65,
        position: "absolute",
         fontSize: 20,
        fontWeight: 700, lineHeight: "100%",
         color: "black",
    }
    handleClick() {
        console.log('Click happened');
    }

    render() { 
        return ( 
            <div>
                <div style={this.style1} onClick={this.handleClick()}>
                    <div style={this.style2}>
                        <img style={this.style3} src="https://firebasestorage.googleapis.com/v0/b/perks-test-25b3c.appspot.com/o/718Msrt2xkL._SL1500_.jpg?alt=media&token=78ac8f54-1bd6-403c-86e5-5e68379b26c3"/>
                        <p style={this.style4}>Category:<br/>Model : <br/>Store Code:<br/>Lab Name:<br/>Issue:<br/>Open Date</p>
                        <p style={this.style5}>Projector<br/>CA124-B<br/>NA255<br/>CSE Level 1 Lab<br/>Stand Broken<br/>2020-10-09</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BrokenItemCard;