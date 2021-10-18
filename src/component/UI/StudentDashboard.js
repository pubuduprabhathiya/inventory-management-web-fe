import classes from './Dashboard.module.css';
import DashboardCard from './DashboardCard';
import DashboardSubCard from './DashboardSubCard';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const StudentDashboard =(props)=>{
    const [show,setShow] =useState(false);
    
    const clickHandler= ()=>{
        setShow(!show);
    }
    return(
        <div className={classes.dashboard}>
            <h2>Actions</h2>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/student/checkAvailability' activeClassName={classes.active}>
                            <DashboardCard iconName= 'book' title='Check Availability' />
                        </NavLink>
                    </li>
                    <li>
                        <div className={classes.design} onClick={clickHandler}> 
                            <DashboardCard iconName= 'pen' title='Create Request'/>
                            {show && <li>
                                <NavLink to='/student/createNormalRequest' activeClassName={classes.active}> 
                                    <DashboardSubCard iconName= 'pen' title='Normal Borrowing'/>
                                </NavLink>
                                <NavLink to='/student/createTemporaryRequest' activeClassName={classes.active}> 
                                    <DashboardSubCard iconName= 'pen' title='Temporary Borrowing'/>
                                </NavLink>
                                </li>}
                        </div>
                    </li>
                    <li>
                        <NavLink to='/student/borrowingItems' activeClassName={classes.active}>
                            <DashboardCard iconName= 'calendar-check' title='Borrowing Items' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default StudentDashboard;