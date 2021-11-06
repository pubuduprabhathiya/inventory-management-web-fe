import Modal from "../UI/Modal";
import classes from './UnavailableItemDetail.module.css';

const UnavailableItemDetail = (props)=>{
    console.log(props.date);
    return(
        <Modal onClose = {props.onClose}>
            <div className={classes.total}>
            <div className={classes.unavailabel}>
                <h5>Category:</h5>
                <h5>Model:</h5>
                <h5>Store Code:</h5>
                <h5>Lab Name:</h5>
                <h5>Available on:</h5>
            </div>
            <div className={classes.unavailabel}>
                <h5>{props.itm.category}</h5>
                <h5>{props.itm.model}</h5>
                <h5>{props.itm.storeCode}</h5>
                <h5>{props.itm.labName}</h5>
                <h5>{props.date}</h5>
            </div>
                
            </div>
            
        </Modal>  
    );
}

export default UnavailableItemDetail;
