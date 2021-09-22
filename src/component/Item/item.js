import Card from '../UI/Card';
import classes from './item.module.css';
import itemImage from '../../assets/projector.jpg';
import Button from './Button';
import { Fragment, useState } from 'react';
import UnavailableItemDetail from './UnavailableItemDetail';
import {useHistory} from 'react-router-dom';



const Items = (props)=>{
    const history = useHistory();
    const [val,setValue] = useState(0);
    const onAvailableClickHandler = ()=>{
        history.push(props.to);  
    }
    const onUnavailableHandler = (value)=>{
        setValue(value);
    }
    const hideHandler = ()=>{
        setValue(0);
    }
    const itemList = props.itemlist.map((item)=>{
            return(
                <Fragment>
                    <Card key={item.id}>
                    <div className={classes.item}>
                        <div>
                            <img src={itemImage} alt='Projector display here'></img>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.detailBilock}>
                                <p>Category:</p>
                                <p>Model:</p>
                                <p>StoreCode:</p>
                                <p>LabName:</p>
                            </div>
                            <div className={classes.details}>
                                <p>{item.itemDetail.category}</p>
                                <p>{item.itemDetail.model}</p>
                                <p>{item.itemDetail.storeCode}</p>
                                <p>{item.itemDetail.labName}</p>
                            </div>
                        </div>
                        <div>
                            {item.availability ? <Button title='Available' availability={true} onClickHandler={onAvailableClickHandler}></Button>: <Button title='Unavailable' availability={false} onClickHandler={()=>onUnavailableHandler(item.id)}/>}
                        </div>
                    </div>
                </Card>
                {item.id === val && <UnavailableItemDetail itm = {item.itemDetail} date={item.avaiableDate} onClose = {hideHandler}></UnavailableItemDetail>}
                </Fragment>    
            );
    });

    return(
        <div>
            <ul>{itemList}</ul>
        </div>
    );
}

export default Items;

