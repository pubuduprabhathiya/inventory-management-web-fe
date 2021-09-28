import Items from "../../component/Item/item";
import StudentLayout from "../../component/Layout/StudentLayout";
import MainContainer from "../../component/UI/MainContainer";
import {getCheckAvailability} from '../../component/lib/api';
import useHttp from '../../component/hook/use-http';
import { useEffect } from "react";


const StudentCheckAvailability = (props)=>{
    const {sendRequest,status,data:loadedData,error}=useHttp(getCheckAvailability,true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    //console.log(status);

    if(status==='pending'){
        return(
            <div><p>Loading..........</p></div>
        )
    }
    if(error){
        return(<p>Error occure here</p>)
    }

    if(status ==='completed' && (!loadedData||loadedData.length===0)){
        return(<h1>No Data</h1>)
    }
    //console.log(loadedData);
    return(
        <StudentLayout>
            <MainContainer title='Check Availability'>
                <Items itemlist={loadedData} to='/student/createNormalRequest'/>
            </MainContainer>
        </StudentLayout>
    );
}

export default StudentCheckAvailability;