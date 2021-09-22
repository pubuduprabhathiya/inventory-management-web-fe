import Card from '../UI/Card';
import classes from './Request.module.css';
import { useHistory } from 'react-router';

export const DuMMy_REQUESTS = [
    {
        id:1,
        details:{
            studentId: '1800234X',
            category: 'Projector',
            model: 'CA124-B',
            storeCode: 'NA255',
            labName: 'CSE Level 1 Lab',
            fromDate: '27/10/2021',
            toDate: '29/10/2021',
        },
    },
    {
        id:2,
        details:{
            studentId: '1800434X',
            category: 'Projector',
            model: 'CA124-B',
            storeCode: 'NA255',
            labName: 'CSE Level 1 Lab',
            fromDate: '27/10/2021',
            toDate: '29/10/2021',
        },
    },
    {
        id:3,
        details:{
            studentId: '1800734X',
            category: 'Camera',
            model: 'CA124-B',
            storeCode: 'NA255',
            labName: 'CSE Level 1 Lab',
            fromDate: '27/10/2021',
            toDate: '29/10/2021',
        },
    },
]

const Request = (props)=>{
    const history = useHistory();

    const buttonClickHandler=(id)=>{
        history.push(`/requestDetail/${id}`)
    }

    const requestList = DuMMy_REQUESTS.map((request)=>{
        return(
          <Card key={request.id}>
              <div className={classes.request}>
                <div className={classes.shape}>
                    <div className={classes.detailBilock}>
                        <p>Student Id:</p>
                        <p>Category:</p>
                        <p>Date:</p>
                    </div>
                    
                    <div className={classes.details}>
                        <p>{request.details.studentId}</p>
                        <p>{request.details.category}</p>
                        <p>{request.details.fromDate}</p>
                    </div>
                </div>
                <div>
                  <button onClick={()=>buttonClickHandler(request.id)}>Respond</button>
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