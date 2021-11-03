import React,{ Fragment } from "react";
import classes from './Header.module.css';
import HeaderIcon from './HeaderIcon';
import HeaderButton from "./HeaderButton";

const Header = (props) =>{
    //console.log(props.socket.id);
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Inventory Management System</h1>
                <div className={classes.divalign}>
                    <HeaderIcon socket={props.socket}/>
                    <HeaderButton/>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;