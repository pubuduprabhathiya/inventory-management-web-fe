import React, { Component } from 'react';

class ItemCard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            category: this.props.category,
           model: this.props.model,
           storeCode: this.props.storeCode,           
           labName: this.props.labName,           
           image : this.props.image,
           availability : this.props.availability,


         }
    }

    style1 = {
        width: "100%",
        height: 250,

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
  

    render() { 
        
       let model = this.props.model
        return ( 
            <div data-testid="checkavailableitem">
                <div style={this.style1} >
                    <div style={this.style2}>
                        <img style={this.style3} src={this.state.image}/>
                        <p style={this.style4}>Category:<br/>Model : <br/>Store Code:<br/>Lab Name:<br/><br/>Availability:</p>
                        <p style={this.style5}>{this.state.category}<br/>{this.state.model}<br/>{this.state.storeCode}<br/>{this.state.labName}<br/><br/>{this.state.availability == 1 ? <button type="button" class="btn btn-success" disabled>Available</button>: <button type="button" class="btn btn-danger" disabled>Unavailable</button>}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ItemCard;