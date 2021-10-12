import classes from './Dashboard.module.css';
import DashboardCard from './DashboardCard';
import DashboardSubCard from './DashboardSubCard';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Dashboard =(props)=>{
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
                        <NavLink to='/checkAvailability' activeClassName={classes.active}>
                            <DashboardCard iconName= 'book' title='Check Availability' />
                        </NavLink>
                    </li>
                    <li>
                        <div className={classes.design} data-testid="custom-element" onClick={clickHandler}> 
                            <DashboardCard iconName= 'pen' title='Create Request'/>
                            {show && <div className={classes.divDesign}>
                                <NavLink to='/createNormalRequest' activeClassName={classes.active}> 
                                    <DashboardSubCard iconName= 'pen' title='Normal Borrowing'/>
                                </NavLink>
                                <NavLink to='/createTemporaryRequest' activeClassName={classes.active}> 
                                    <DashboardSubCard iconName= 'pen' title='Temporary Borrowing'/>
                                </NavLink>
                                </div>}
                        </div>
                    </li>
                    <li>
                        <NavLink to='/approveRequest' activeClassName={classes.active}>
                            <DashboardCard iconName= 'calendar-check' title='Approve Request' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;