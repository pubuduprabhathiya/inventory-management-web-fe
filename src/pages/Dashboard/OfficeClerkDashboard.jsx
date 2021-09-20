import React, { Component } from 'react';
import NewLectureApplication from '../../containers/Forms/NewLectureApplication';
import NavBar from '../../containers/Navbar/Navbar';
import OfficeClerkSideMenu from '../../containers/SideMenu/OfficeClerkSideMenu';

class OfficeClerkDashboard extends Component {
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
                        <NewLectureApplication/>
                    </div>
                </div>
            

            </div> 
        );
    }
}
 
export default OfficeClerkDashboard;