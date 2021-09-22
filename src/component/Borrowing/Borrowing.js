import Card from "../UI/Card";
import classes from './Borrowing.module.css';
import itemImage from '../../assets/projector.jpg';




const Borrowings = (props)=>{
    const borrowinglist = props.itemList.map((item)=>{
        return(
            <Card>
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