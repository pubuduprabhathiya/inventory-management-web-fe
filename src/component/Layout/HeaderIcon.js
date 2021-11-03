import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import classes from './HeaderIcon.module.css';
import {getNotifications} from '../lib/api';

const HeaderIcon = (props)=>{
    console.log(props.socket.id);
    const [notification,setNotification] = useState([]);

    useEffect(()=>{
        props.socket.on("getNotification",(data)=>{
            {console.log('function fires here')}
            setNotification((prev)=>[...prev,data]);
        });
    },[props.socket]);

    const fetchNotificationHandler = useCallback(async()=>{
        const data = await getNotifications({id:'123456L'});
        console.log('Here data');
        console.log(data);
        if(data){
            console.log('Data here callback');
            setNotification(data);
        } 
    },[]);

    useEffect(()=>{
        fetchNotificationHandler();
    },[fetchNotificationHandler]);

    


    // if(notificationStatus==='completed'){
    //     setNotification(notificationList);
    // // }
    return(
        <span className={classes.icon}>
            <FontAwesomeIcon icon='bell'/>
            {console.log(notification)}
            {notification.length>0 && <div className={classes.counter}>{notification.length}</div>}
        </span>
    );
}

export default HeaderIcon;