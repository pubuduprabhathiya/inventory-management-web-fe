
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/technical_officer/header";
import AcceptEquipment from "../pages/technical_officer/accept_equipment";
import AddUpdateEquipment from "../pages/technical_officer/add_update_equipment";
import IssueEquipment from "../pages/technical_officer/issue_equipment";
import Report from "../pages/technical_officer/report";
import ViewTrack from "../pages/technical_officer/view_track";


const TechnicalOfficer = () => {
    
    return (
        
        <Router>
           
            <Header/>
       
        <Switch>
        <Route path='/technicalofficer/viewtrackofequipment'>
          <ViewTrack/>
        </Route>
        <Route path='/technicalofficer/issueequipment'>
          <IssueEquipment/>
                </Route>
        <Route path='/technicalofficer/acceptequipment'>
          <AcceptEquipment/>
          </Route>
          
        <Route path='/technicalofficer/addupdateequipment'>
          <AddUpdateEquipment/>
          </Route>

          <Route path='/technicalofficer/report'>
            <Report />
          </Route>
        
        </Switch>
        
    
    </Router>
    );
}
export default TechnicalOfficer;