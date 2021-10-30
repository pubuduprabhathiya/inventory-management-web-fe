import Card from '../UI/Card';
import classes from './item.module.css';
import itemImage from '../../assets/projector.jpg';
import Button from './Button';
import { Fragment, useState } from 'react';
import UnavailableItemDetail from './UnavailableItemDetail';
import {useHistory} from 'react-router-dom';
import Moment from 'moment';



const Items = (props)=>{
    const history = useHistory();
    const [val,setValue] = useState(0);
    const [enterValue, setEnterValue] = useState('');
    const [has, setHas] = useState(false);
    const onAvailableClickHandler = ()=>{
        history.push(props.to);  
    }
    const onUnavailableHandler = (value)=>{
        setValue(value);
    }
    const hideHandler = ()=>{
        setValue(0);
    }

    const valueChangeHandler = (event)=>{
        setEnterValue(event.target.value);
    }
    const itemList = props.itemlist.map((item)=>{
            let iteDetail = {category:item['Category.categoryName'],model:item['Model.modelName'],storeCode:item['id'],labName:item['Lab.labName']};
            return(
                <Fragment key={item['keyid']}>
                    {item['Category.categoryName'].toLowerCase().startsWith(enterValue.toLowerCase()) ?
                    <Card>
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
                                <p>{item['Category.categoryName']}</p>
                                <p>{item['Model.modelName']}</p>
                                <p>{item['id']}</p>
                                <p>{item['Lab.labName']}</p>
                            </div>
                        </div>
                        <div>
                            {item['availability'] ? <Button title='Available' availability={true} onClickHandler={onAvailableClickHandler}></Button>: <Button title='Unavailable' availability={false} onClickHandler={()=>onUnavailableHandler(item['id'])}/>}
                        </div>
                    </div> 
                </Card>:
                null
                }
                {item['id'] === val && item['status']==='damage' && <UnavailableItemDetail itm = {iteDetail} date={'Not available'} onClose = {hideHandler}></UnavailableItemDetail>}
                {item['id'] === val && item['status']!='damage' && <UnavailableItemDetail itm = {iteDetail} date={Moment(item['returnDate']).format('DD-MM-YYYY')} onClose = {hideHandler}></UnavailableItemDetail>}
                </Fragment>    
            );
    });


    return(
        <div>
            <input type = 'text' placeholder='Search categories' onChange={valueChangeHandler} className={classes.formStyle}/> 
            {itemList.filter(item => item.props.children[0]!=null).length>0 ? <ul>{itemList}</ul> : <h4>No matching equipments</h4> }

        </div>
    );
}

export default Items;

