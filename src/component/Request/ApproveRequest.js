import { useParams } from "react-router-dom";
import classes from './ApproveRequest.module.css';
import { getPendingDetails,approvePending,rejectPending,sendNotificationByLecturer } from '../lib/api';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import useHttp from '../hook/use-http';
import Moment from 'moment';
import { useState } from 'react';
import LoadingSpinner from "../Layout/LoadingSpinner";
import { connect } from "react-redux";

const ApproveRequest = (props)=>{
    const history = useHistory();
    const params = useParams();
    const [approve,setApprove]=useState(null);
    const [reject,setReject]=useState(null);
    //console.log(params.id);

    const {sendRequest,status,data:loadedData,error}=useHttp(getPendingDetails,true);
    const {sendRequest:approveRequest,status:approveStatus,error:approveError} = useHttp(approvePending,true);
    const {sendRequest:rejectRequest,status:rejectStatus,error:rejectError} = useHttp(rejectPending,true);
    const {sendRequest:sendNotification,status:notificationStatus} = useHttp(sendNotificationByLecturer,true);
    useEffect(()=>{
        sendRequest(params.id);
    },[sendRequest]);

    useEffect(()=>{
        if(approve){
            approveRequest(params.id);
            sendNotification({lecId: props.id,studentId:loadedData[0]['studentId'],notification:'accepted'});
        }
    },[approve]);

    useEffect(()=>{
        if(reject){
            rejectRequest(params.id);
            sendNotification({lecId: props.id, studentId:loadedData[0]['studentId'],notification:'rejected'});
        }
    },[reject]);

    if(status==='pending'){
        return(
            //<center><LoadingSpinner/></center>
            <div className={classes.spinner}><LoadingSpinner/></div>
        );
    }
    if(error){
        return(<p>{error}</p>)
    }

    if(status ==='completed' && (!loadedData||loadedData.length===0)){
        return(<h1>No Data</h1>)
    }

    console.log(loadedData);
    const approveHandler = ()=>{
        setApprove(true);
        props.socket.emit("sendNotification",{
            senderId: props.id,
            receiverId: loadedData[0]['studentId'],
            message: 'accepted',
        });
        console.log('sent');
    }
    const rejectHandler = ()=>{
        setReject(true);
        props.socket.emit("sendNotification",{
            senderId: props.id,
            receiverId: loadedData[0]['studentId'],
            message: 'rejected',
        });
    }
    
    if((approveStatus==='completed' || rejectStatus==='completed')&& notificationStatus==='completed'){
        history.push('/lecturer/approveRequest');
    }

    // console.log(loadedData[0]['studentId']);

    const request = loadedData.map(filteredReq=>(
        <div className={classes.card} key={filteredReq.id}>
            <div className={classes.main}>
                <div className={classes.shape}>
                    <div className={classes.detailBlock}>
                        <p>StudentId:</p>
                        <p>Category:</p>
                        <p>Model:</p>
                        <p>Store Code:</p>
                        <p>Lab Name:</p>
                        <p>From Date:</p>
                        <p>Due Date:</p>
                    </div>
                    <div className={classes.details}>
                        <p>{filteredReq.studentId}</p>
                        <p>{filteredReq.category}</p>
                        <p>{filteredReq.model}</p>
                        <p>{filteredReq.storeCode}</p>
                        <p>{filteredReq.labName}</p>
                        <p>{Moment(filteredReq.requestDate).format('DD-MM-YYYY')}</p>
                        <p>{Moment(filteredReq.returnDate).format('DD-MM-YYYY')}</p>
                    </div>
                </div>
                <div className={classes.shape}>
                    <button className={classes.reject} onClick={rejectHandler}>Reject</button>
                    <button className={classes.approve} onClick={approveHandler}>Accept</button>
                </div>
            </div>
        </div> 
    ));
    return(
        <div>
            {request}
        </div>
        
    );    
}

const mapStateToProps = state => {
    return {
        id: state.reducer.user,
    };
};

export default connect(mapStateToProps,null)(ApproveRequest);

