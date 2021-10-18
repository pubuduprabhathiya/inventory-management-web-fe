

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../component/technical_officer/header";
import AcceptEquipment from "../screen/technical_officer/accept_equipment";
import AddUpdateEquipment from "../screen/technical_officer/add_update_equipment";
import IssueEquipment from "../screen/technical_officer/issue_equipment";
import Report from "../screen/technical_officer/report";
import ViewTrack from "../screen/technical_officer/view_track";


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