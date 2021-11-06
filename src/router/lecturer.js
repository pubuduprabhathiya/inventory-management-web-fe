import { Switch, Route } from 'react-router-dom';
import CheckAvailabilityScreen from '../screen/lecturerScreen/CheckAvailabilityScreen';
import CreateNormalRequestScreen from '../screen/lecturerScreen/CreateNormalRequestScreen';
import CreateTemporaryRequestScreen from '../screen/lecturerScreen/CreateTemporaryRequestScreen';
import ApproveRequestScreen from '../screen/lecturerScreen/approveRequestScreen';
import RequestDetail from '../screen/lecturerScreen/RequestDetailScreen';
import '../component/Layout/FontawsomeIcon';


const Lecturer = (props)=>{
    return(
        <Switch>
            <Route path='/lecturer/checkAvailability'>
                <CheckAvailabilityScreen socket={props.socket}/>
            </Route>
            <Route path='/lecturer/createNormalRequest'>
                <CreateNormalRequestScreen socket={props.socket}/>
            </Route>
            <Route path='/lecturer/createTemporaryRequest'>
                <CreateTemporaryRequestScreen socket={props.socket}/>
            </Route>
            <Route path='/lecturer/approveRequest'>
                <ApproveRequestScreen socket={props.socket}/>
            </Route>
            <Route path='/lecturer/requestDetail/:id'>
                <RequestDetail socket={props.socket}/>
            </Route>
        </Switch>
    );
}

export default Lecturer;