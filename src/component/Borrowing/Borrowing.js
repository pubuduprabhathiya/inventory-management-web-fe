import Card from "../UI/Card";
import classes from './Borrowing.module.css';
import itemImage from '../../assets/projector.jpg';
import { getBorrowingHistory } from "../lib/api";
import useHttp from "../hook/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../Layout/LoadingSpinner";





const Borrowings = (props)=>{

    const {sendRequest,status,data:loadedData,error}=useHttp(getBorrowingHistory,true);
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


    const borrowinglist = loadedData.map((item)=>{
        return(
            <Card key={item['keyid']}>
                <div className={classes.item}>
                    <div className={classes.detailBilock}>
                        <p>{item.date.month}</p>
                        <p>{item.date.day}</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.detailBilock}>
                            <p>Category:</p>
                            <p>Model:</p>
                            <p>Store Code:</p>
                            <p>Lab Name:</p>
                        </div>
                        <div className={classes.details}>
                            <p>{item.details.category}</p>
                            <p>{item.details.model}</p>
                            <p>{item.details.storeCode}</p>
                            <p>{item.details.labName}</p>
                        </div>
                    </div>
                    <div>
                        <img src={itemImage} alt='Projector display here'></img>
                    </div>
                </div>
            </Card>
        );
    });
    
    return(
        <div>
            <ul>{borrowinglist}</ul>
        </div>
    );
    
}

export default Borrowings;