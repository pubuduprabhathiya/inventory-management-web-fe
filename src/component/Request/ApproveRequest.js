import { DuMMy_REQUESTS } from "./Request";
import { useParams } from "react-router-dom";
import classes from './ApproveRequest.module.css';

const ApproveRequest = (props)=>{
    const params = useParams();
    const request = DuMMy_REQUESTS.filter(req=>req.id.toString()===params.id).map(filteredReq=>(
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
                        <p>{filteredReq.details.studentId}</p>
                        <p>{filteredReq.details.category}</p>
                        <p>{filteredReq.details.model}</p>
                        <p>{filteredReq.details.storeCode}</p>
                        <p>{filteredReq.details.labName}</p>
                        <p>{filteredReq.details.fromDate}</p>
                        <p>{filteredReq.details.toDate}</p>
                    </div>
                </div>
                <div className={classes.shape}>
                    <button className={classes.reject}>Reject</button>
                    <button className={classes.approve}>Accept</button>
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

export default ApproveRequest;

