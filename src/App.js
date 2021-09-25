import React from 'react';
import './App.css';
// import OfficeClerkAction from './pages/ActionPage/OfficeClerkAction';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';


import Login from './pages/Login/Login';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import AddStudentPage from "./pages/ActionPage/Admin/AddStudentPage";
import AddLecturePage from "./pages/ActionPage/Admin/AddLecturePage";
import AddTechnicalPage from "./pages/ActionPage/Admin/AddTechnicalOfficerPage";
import AddOfficeClerkPage from "./pages/ActionPage/Admin/AddOfficeClerkPage";
import AddLaboratory from "./pages/ActionPage/Admin/AddLaboratoryPage";
import NewDamageViewPage from './pages/ActionPage/OfficeClerk/NewDamageRequestViewPage';

function App() {
  return (
    <div className="App">
     <Router>
       <div>
                  
                    <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/admin/dashboard" component={AdminDashboard}/>
                    <Route path="/admin/add-student" component={AddStudentPage}/>
                    <Route path="/admin/add-lecture" component={AddLecturePage}/>
                    <Route path="/admin/add-technical-officer" component={AddTechnicalPage}/>
                    <Route path="/admin/add-office-clerk" component={AddOfficeClerkPage}/>
                    <Route path="/admin/add-laboratory" component={AddLaboratory}/>
                    <Route path="/office-clerk/new-damage" component={NewDamageViewPage}/>
               
                    </Switch>
                    
            </div>
        </Router>
    </div>
  );
}

export default App;
