import Items from "../../component/Item/item";
import MainContainer from "../../component/UI/MainContainer";
import Layout from "../../component/Layout/Layout";
import {getCheckAvailability} from '../../component/lib/api';
import useHttp from '../../component/hook/use-http';
import { useEffect } from "react";
import LoadingSpinner from "../../component/Layout/LoadingSpinner";

const CheckAvailabilityScreen = (props)=>{
    const {sendRequest,status,data:loadedData,error}=useHttp(getCheckAvailability,true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    if(status==='pending'){
        return(
            <center><LoadingSpinner/></center>
        )
    }
    if(error){
        return(<p>Error occure here</p>)
    }

    if(status ==='completed' && (!loadedData||loadedData.length===0)){
        return(<h1>No Data</h1>)
    }
    return(
        <Layout socket={props.socket}>
            <MainContainer title='Check Availability'>
                <Items itemlist={loadedData} to='/lecturer/createNormalRequest'/>
            </MainContainer>
        </Layout>
        
    );
}

export default CheckAvailabilityScreen;