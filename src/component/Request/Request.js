import Card from '../UI/Card';
import classes from './Request.module.css';
import { useHistory } from 'react-router';
import { getPendingRequests } from '../lib/api';
import { useEffect } from 'react';
import useHttp from '../hook/use-http';
import Moment from 'moment';

const Request = (props)=>{
    const history = useHistory();

    const {sendRequest,status,data:loadedData,error}=useHttp(getPendingRequests,true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

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

    const buttonClickHandler=(id)=>{
        history.push(`/requestDetail/${id}`)
    }

    const requestList = loadedData.map((request)=>{
        return(
          <Card key={request.keyid}>
              <div className={classes.request}>
                <div className={classes.shape}>
                    <div className={classes.detailBilock}>
                        <p>Student Id:</p>
                        <p>StoreCode:</p>
                        <p>Request Date:</p>
                    </div>
                    
                    <div className={classes.details}>
                        <p>{request.studentId}</p>
                        <p>{request.storeCode}</p>
                        <p>{Moment(request.requestDate).format('DD-MM-YYYY')}</p>
                    </div>
                </div>
                <div>
                  <button onClick={()=>buttonClickHandler(request.requestId)}>Respond</button>
                </div>
              </div>
              
          </Card>  
        );
    });

    return(
        <div>
            <ul>{requestList}</ul>
        </div>
    );
}

export default Request;