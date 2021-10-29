import { Switch, Route } from 'react-router-dom';

import StudentBorrowingDetails from '../screen/studentScreen/StudentBorrowingDetails';
import StudentCheckAvailability from '../screen/studentScreen/StudentCheckAvailability';
import StudentNormalRequest from '../screen/studentScreen/StudentNormalRequest';
import StudentTemporalRequest from '../screen/studentScreen/StudentTemporalRequest';
import '../component/Layout/FontawsomeIcon';

const Student = ()=>{
    return(
        <Switch>
            <Route path='/student/checkAvailability'>
                <StudentCheckAvailability/>
            </Route>
            <Route path='/student/createNormalRequest'>
                <StudentNormalRequest/>
            </Route>
            <Route path='/student/createTemporaryRequest'>
                <StudentTemporalRequest/>
            </Route>
            <Route path='/student/borrowingItems'>
                <StudentBorrowingDetails/>
            </Route>
      </Switch>
    );
}

export default Student;