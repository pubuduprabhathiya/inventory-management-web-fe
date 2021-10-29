import { Switch, Route } from 'react-router-dom';
import CheckAvailabilityScreen from '../screen/lecturerScreen/CheckAvailabilityScreen';
import CreateNormalRequestScreen from '../screen/lecturerScreen/CreateNormalRequestScreen';
import CreateTemporaryRequestScreen from '../screen/lecturerScreen/CreateTemporaryRequestScreen';
import ApproveRequestScreen from '../screen/lecturerScreen/approveRequestScreen';
import RequestDetail from '../screen/lecturerScreen/RequestDetailScreen';
import '../component/Layout/FontawsomeIcon';


const Lecturer = ()=>{
    return(
        <Switch>
            <Route path='/lecturer/checkAvailability'>
                <CheckAvailabilityScreen/>
            </Route>
            <Route path='/lecturer/createNormalRequest'>
                <CreateNormalRequestScreen/>
            </Route>
            <Route path='/lecturer/createTemporaryRequest'>
                <CreateTemporaryRequestScreen/>
            </Route>
            <Route path='/lecturer/approveRequest'>
                <ApproveRequestScreen/>
            </Route>
            <Route path='/lecturer/requestDetail/:id'>
                <RequestDetail/>
            </Route>
        </Switch>
    );
}

export default Lecturer;