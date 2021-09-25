import React, { Component } from 'react';
import CustomConfirm from '../../containers/Alert/CustomAlertDialog';
// import ConfirmationAlert from '../../containers/Alert/CustomAlertDialog';
import NavBar from '../../containers/Navbar/Navbar';
import NewDamageItemList from '../../containers/OfficeClerkContainer/NewDamageItemList';
import OfficeClerkSideMenu from '../../containers/SideMenu/OfficeClerkSideMenu';

class OfficeClerkAction extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar/>

                <div className="row m-5">
                    <div className="col-4" align="center">
                        <OfficeClerkSideMenu/>
                    </div>
                    <div className="col-8" >
                        <NewDamageItemList/>
                    </div>
                    <CustomConfirm/>
                </div>
            

            </div> 
        );
    }
}
 
export default OfficeClerkAction;