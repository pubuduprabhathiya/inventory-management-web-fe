import React, { useEffect, useState } from "react";
import {io} from "socket.io-client";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';



import * as actions from '../store/actions';

import Login from "./Login/Login";
import Help from "./Help/helpScreen";

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
import CheckAvailability from './ActionPage/OfficeClerk/CheckAvailabilityViewPage';

import CustomDashboard from './Dashboard/CustomDashboard';
import StudentDashboard from './Dashboard/StudentDashboard';

import Student from '../router/student';
import Lecturer from '../router/lecturer';
import TechnicalOfficer from '../router/technical_officer';

import PopUp from "../containers/Alert/CustomAlertDialog"; 

const Main = (props) => {
    const [socket, setSocket] = useState(null);

    useEffect(()=>{
        setSocket(io("http://localhost:5000"));
    },[]);

    return (
        <BrowserRouter>
            <div>
            
                <Content isAuthenticated={props.isAuthenticated} error={props.error} userId={props.id} socket={socket}/>
            
            </div>
            {props.error != null ? <PopUp errorMsg={props.error} /> : null}
        </BrowserRouter>
    );
}

const Content = ({ isAuthenticated ,error,userId,socket}) => {

    console.log(error);

    
    if(error != null){
   
    }
   
    let routes = () => (
        <Switch>
            <Route path="/" exact component={Login} /> 
            <Route path="/help" exact component={Help} />           
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
        if(userType === "Student")routes = () =>{
            socket?.emit("newUser",userId);
            socket ?console.log("Student has socket now"+userId):console.log("Student has not socket");
            return(              
                <Switch >
                    <Route path="/"  exact component={StudentDashboard}/>
                    <Route path='/student'>
                        <Student socket={socket}/>
                    </Route>                    
                </Switch>
            );
        };
        if(userType === "Lecturer")routes = () => {
            socket?.emit("newUser",userId);
            socket ? console.log("Lecturer has socket"): console.log("Lecturer has not socket");
            return(        
                <Switch >
                    <Route path="/" exact component={CustomDashboard}/>
                    <Route path='/lecturer'>
                        <Lecturer socket={socket}/>
                    </Route> 
                </Switch>
            );
        };
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
                    <Route path="/office-clerk/item-list" ><CheckAvailability/></Route>
                    
     
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
    console.log("state"+state.reducer.error );
    return {
        isAuthenticated: !(state.reducer.token === null || state.reducer.token === undefined),
        error:state.reducer.error,
        id: state.reducer.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout('/'))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Main);