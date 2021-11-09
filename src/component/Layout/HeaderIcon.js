import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import classes from './HeaderIcon.module.css';
import {getNotifications} from '../lib/api';
import { connect } from 'react-redux';
import React,{Fragment} from 'react';
import { Manager } from 'socket.io-client';

const HeaderIcon = (props)=>{
    console.log(props.socket.id);
    const [notification,setNotification] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        props.socket.on("getNotification",(data)=>{
            {console.log('function fires here')}
            setNotification((prev)=>[...prev,data]);
        });
    },[props.socket]);

    const fetchNotificationHandler = useCallback(async()=>{
        const data = await getNotifications({id:props.id});
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

    const bellHandler = ()=>{
        setOpen(!open); 
    }

    const messages = notification.map((msg)=>{
        if(msg.message == 'accepted' || msg.message == 'rejected'){
            return(
                <p key={msg.id}>{msg.senderId} has {msg.message}</p>
            );
        }else{
            return(
                <p key={msg.id}>{msg.senderId} is waiting for the response</p>
            );
        }
    });
    console.log(notification);

    const readHandler = ()=>{
        setNotification([]);
        setOpen(false);
    }

    // if(notificationStatus==='completed'){
    //     setNotification(notificationList);
    // // }
    return(
        <Fragment>
        <span className={classes.icon}>
            <FontAwesomeIcon icon='bell' onClick={bellHandler}/>
            {console.log(notification)}
            {notification.length>0 && <div className={classes.counter}>{notification.length}</div>}
        </span>
        {open &&
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.main}>
                        {messages}
                        <button onClick={readHandler}>Mark As Read</button>
                    </div>
                </div>
            </div>
        }
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        id: state.reducer.user,
    };
};

export default connect(mapStateToProps,null)(HeaderIcon);