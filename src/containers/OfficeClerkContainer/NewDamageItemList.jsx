import React, { Component } from 'react'
import BrokenItemCard from '../../components/BrokenItemCard';

class NewDamageItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    newStyle= {
        // margin: 40,
        padding: 30,
         background:" #bef1be",
          borderRadius: 20,
    };

    render() {  
        return (  
            <div style={this.newStyle}>
                <h3 style={{textAlign:"center",}}>New Damage Item</h3>
                <br />
                <div>
                    <BrokenItemCard/>
                    <br />
                    <BrokenItemCard/>
                </div>
            </div>
        );
    }
}
 
export default NewDamageItemList;
