import classes from './DashboardCard.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const DashboardCard = (props)=>{
    return(
        <div className={classes.card}>
            <span><FontAwesomeIcon icon={props.iconName} size='2x'/></span>
            <h3>{props.title}</h3>
        </div>  
    );
}

export default DashboardCard;