
import './App.css';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import TechnicalOfficer from './router/technical_officer';
function App() {
  return (
    <Router>
       
      
      <Switch>
        <Route path='/technicalofficer'>
          <TechnicalOfficer/>
        </Route>
        <Route path='/'>
          <h1>home</h1>
        </Route>
        </Switch>
        
    
    </Router>
    
  );
}

export default App;
