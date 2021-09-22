import Modal from "../UI/Modal";
import classes from './UnavailableItemDetail.module.css';

const UnavailableItemDetail = (props)=>{
    return(
        <Modal onClose = {props.onClose}>
            <div className={classes.total}>
            <div className={classes.unavailabel}>
                <h4>Category:</h4>
                <h4>Model:</h4>
                <h4>Store Code:</h4>
                <h4>Lab Name:</h4>
                <h4>Available on:</h4>
            </div>
            <div className={classes.unavailabel}>
                <h4>{props.itm.category}</h4>
                <h4>{props.itm.model}</h4>
                <h4>{props.itm.storeCode}</h4>
                <h4>{props.itm.labName}</h4>
                <h4>{props.date}</h4>
            </div>
                
            </div>
            
        </Modal>  
    );
}

export default UnavailableItemDetail;
