import React, { Component } from "react";
import './App.css';
// import OfficeClerkAction from './pages/ActionPage/OfficeClerkAction';
// import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

import Main from './screen/Main';



class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     socket: null
  //   };
  // }

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Main />
      </div>     
    );
  } 

}
// import { Switch, Route } from 'react-router-dom';
// import TechnicalOfficer from './router/technical_officer';
// import "../src/component/Layout/FontawsomeIcon";
// import Student from './router/student';
// import Lecturer from './router/lecturer';

// function App() {
//   return(
//     <Switch>
//       <Route path='/technicalofficer'>
//         <TechnicalOfficer />
//       </Route>
//       <Route path='/student'>
//         <Student/>
//       </Route>
//       <Route path='/lecturer'>
//         <Lecturer/>
//       </Route>
//       </Switch>
//   );
// }

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( null, mapDispatchToProps )( App ) );


// function App() {
//   return (
//     <div className="App">
//      <Router>
//        <div>
                  
//                     <Switch>
//                     <Route path="/" exact component={Login}/>
                    // <Route path="/admin/dashboard" component={AdminDashboard}/>
                    // <Route path="/admin/add-student" component={AddStudentPage}/>
                    // <Route path="/admin/add-lecture" component={AddLecturePage}/>
                    // <Route path="/admin/add-technical-officer" component={AddTechnicalPage}/>
                    // <Route path="/admin/add-office-clerk" component={AddOfficeClerkPage}/>
                    // <Route path="/admin/add-laboratory" component={AddLaboratory}/>
                    
                    // <Route path="/office-clerk/dashboard" component={OfficeClerkDashboard}/>
                    // <Route path="/office-clerk/new-damage" component={NewDamageViewPage}/>
                    // <Route path="/office-clerk/old-damage" component={OldDamageViewPage}/>
                    // <Route path="/office-clerk/pending-damage" component={PendingDamageViewPage}/>

//                     <Route path="/custom/dashboard" component={CustomDashboard}/>
               
//                     </Switch>
                    
//             </div>
//         </Router>
//     </div>
//   );
// }

// export default App;


