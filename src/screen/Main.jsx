import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';



import * as actions from '../store/actions';

import Login from "./Login/Login";

import AdminDashboard from './Dashboard/AdminDashboard';
import AddStudentPage from './ActionPage/Admin/AddStudentPage';
import AddLecturePage from "./ActionPage/Admin/AddLecturePage";
import AddTechnicalPage from "./ActionPage/Admin/AddTechnicalOfficerPage";
import AddOfficeClerkPage from "./ActionPage/Admin/AddOfficeClerkPage";
import AddLaboratory from "./ActionPage/Admin/AddLaboratoryPage";
import UpdateUser from "./ActionPage/Admin/UpdateUserPage"


import OfficeClerkDashboard from './Dashboard/OfficeClerkDashboard.jsx';
import NewDamageViewPage from './ActionPage/OfficeClerk/NewDamageRequestViewPage';
import OldDamageViewPage from './ActionPage/OfficeClerk/OldDamageRequestViewPage';
import PendingDamageViewPage from './ActionPage/OfficeClerk/PendingRepairViewPage';

import CustomDashboard from './Dashboard/CustomDashboard';

import Student from '../router/student';
import Lecturer from '../router/lecturer';
import TechnicalOfficer from '../router/technical_officer';

const Main = (props) => {
    return (
        <BrowserRouter>
            <div>
            
                <Content isAuthenticated={props.isAuthenticated}  />
            
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
        console.log("userType");  
        console.log(userType);  
        if(userType === "Admin")routes = () => (        
                <Switch >
                    <Route path="/" exact component={AdminDashboard}/>
                    <Route path="/admin/add-student" component={AddStudentPage}/>
                    <Route path="/admin/add-lecture" component={AddLecturePage}/>
                    <Route path="/admin/add-technical-officer" component={AddTechnicalPage}/>
                    <Route path="/admin/add-office-clerk" component={AddOfficeClerkPage}/>
                    <Route path="/admin/add-laboratory" component={AddLaboratory}/>
                    <Route path="/admin/update-password" exact component={UpdateUser}/>
                </Switch>
            );
        if(userType === "Student")routes = () => (              
                <Switch >
                    <Route path="/"  exact component={CustomDashboard}/>
                    <Route path='/student'>
                        <Student/>
                    </Route>                    
                </Switch>
            );
        if(userType === "Lecturer")routes = () => (        
                <Switch >
                    <Route path="/" exact component={CustomDashboard}/>
                    <Route path='/lecturer'>
                        <Lecturer/>
                    </Route> 
                </Switch>
            );
        if(userType === "TechnicalOfficer")routes = () => (        
                <Switch >
                    <Route path="/" exact component={CustomDashboard}/>
                    <Route path='/technicalofficer'>
                        <TechnicalOfficer/>
                    </Route> 
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
    console.log("state"+state.reducer.token );
    return {
        isAuthenticated: !(state.reducer.token === null || state.reducer.token === undefined),
        // userType : this.state.userType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout('/'))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Main);