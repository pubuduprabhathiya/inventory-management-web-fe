import React,{Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

//import StudentBorrowingDetails from '../screen/studentScreen/StudentBorrowingDetails';
//import StudentCheckAvailability from '../screen/studentScreen/StudentCheckAvailability';
//import StudentNormalRequest from '../screen/studentScreen/StudentNormalRequest';
//import StudentTemporalRequest from '../screen/studentScreen/StudentTemporalRequest';
import '../component/Layout/FontawsomeIcon';

const StudentCheckAvailability = React.lazy(()=>import('../screen/studentScreen/StudentCheckAvailability'));
const StudentBorrowingDetails = React.lazy(()=>import('../screen/studentScreen/StudentBorrowingDetails'));
const StudentNormalRequest = React.lazy(()=>import('../screen/studentScreen/StudentNormalRequest'));
const StudentTemporalRequest = React.lazy(()=>import('../screen/studentScreen/StudentTemporalRequest'));
const Student = (props)=>{
    return(
        <Suspense fallback={<p>Loading....</p>}>
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
      </Suspense>
    );
}

export default Student;