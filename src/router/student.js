import { Switch, Route } from 'react-router-dom';

import StudentBorrowingDetails from '../screen/studentScreen/StudentBorrowingDetails';
import StudentCheckAvailability from '../screen/studentScreen/StudentCheckAvailability';
import StudentNormalRequest from '../screen/studentScreen/StudentNormalRequest';
import StudentTemporalRequest from '../screen/studentScreen/StudentTemporalRequest';
import '../component/Layout/FontawsomeIcon';

const Student = (props)=>{
    return(
        <Switch>
            <Route path='/student/checkAvailability'>
                <StudentCheckAvailability socket={props.socket}/>
            </Route>
            <Route path='/student/createNormalRequest'>
                <StudentNormalRequest socket={props.socket}/>
            </Route>
            <Route path='/student/createTemporaryRequest'>
                <StudentTemporalRequest socket={props.socket}/>
            </Route>
            <Route path='/student/borrowingItems'>
                <StudentBorrowingDetails socket={props.socket}/>
            </Route>
      </Switch>
    );
}

export default Student;