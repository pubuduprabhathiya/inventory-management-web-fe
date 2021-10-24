import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';



import * as actions from '../store/actions/';

import Login from "./Login/Login";

import AdminDashboard from './Dashboard/AdminDashboard';
import AddStudentPage from './ActionPage/Admin/AddStudentPage';
import AddLecturePage from "./ActionPage/Admin/AddLecturePage";
import AddTechnicalPage from "./ActionPage/Admin/AddTechnicalOfficerPage";
import AddOfficeClerkPage from "./ActionPage/Admin/AddOfficeClerkPage";
import AddLaboratory from "./ActionPage/Admin/AddLaboratoryPage";


import OfficeClerkDashboard from './Dashboard/OfficeClerkDashboard.jsx';
import NewDamageViewPage from './ActionPage/OfficeClerk/NewDamageRequestViewPage.jsx';
import OldDamageViewPage from './ActionPage/OfficeClerk/OldDamageRequestViewPage';
import PendingDamageViewPage from './ActionPage/OfficeClerk/PendingRepairViewPage';

import CustomDashboard from './Dashboard/CustomDashboard';

const Main = (props) => {
    return (
        <BrowserRouter>
            <div>
                {/* <Header /> */}
                <Content isAuthenticated={props.isAuthenticated}  />
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    );
}

const Content = ({ isAuthenticated }) => {

    console.log(isAuthenticated);

   
    let routes = () => (
        <Switch>
            <Route path="/" exact component={Login} />           
        </Switch>
    );

    if (isAuthenticated) {
        let userType = localStorage.getItem('userType');
        if(userType === "Admin")routes = () => (        
                <Switch >
                    <Route path="/" exact component={AdminDashboard}/>
                    <Route path="/admin/add-student" component={AddStudentPage}/>
                    <Route path="/admin/add-lecture" component={AddLecturePage}/>
                    <Route path="/admin/add-technical-officer" component={AddTechnicalPage}/>
                    <Route path="/admin/add-office-clerk" component={AddOfficeClerkPage}/>
                    <Route path="/admin/add-laboratory" component={AddLaboratory}/>
                </Switch>
            );
        if(userType === "Student")routes = () => (        
                <Switch >
                    <Route path="/" component={CustomDashboard}/>
                </Switch>
            );
        if(userType === "Lecturer")routes = () => (        
                <Switch >
                    <Route path="/" component={CustomDashboard}/>
                </Switch>
            );
        if(userType === "TechnicalOfficer")routes = () => (        
                <Switch >
                    <Route path="/" component={CustomDashboard}/>
                </Switch>
            );
        if(userType === "OfficeClerk")routes = () => (        
                <Switch>
                    <Route path="/" exact component={OfficeClerkDashboard}/>
                    <Route path="/office-clerk/new-damage" ><NewDamageViewPage/></Route>
                    <Route path="/office-clerk/old-damage" ><OldDamageViewPage/></Route>
                    <Route path="/office-clerk/pending-damage" ><PendingDamageViewPage/></Route>
     
                </Switch>
            );        
    }
 

    return (
        
        <div>            
            {routes()}
        </div>
    );

};

const mapStateToProps = state => {
    return {
        isAuthenticated: !(state.token === null || state.token === undefined),
        // userType : this.state.userType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout('/'))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Main);