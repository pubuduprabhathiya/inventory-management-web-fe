
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TechnicalOfficer from './router/technical_officer';
import "../src/component/Layout/FontawsomeIcon";
import Student from './router/student';
import Lecturer from './router/lecturer';

function App() {

  return(
    <Switch>
      <Route path='/technicalofficer'>
        <TechnicalOfficer />
      </Route>
      <Route path='/student'>
        <Student/>
      </Route>
      <Route path='/lecturer'>
        <Lecturer/>
      </Route>
      </Switch>

  );
}

export default App;
