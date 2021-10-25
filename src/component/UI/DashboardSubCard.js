import classes from './DashboardCard.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const DashboardSubCard = (props)=>{
    return(
        <div className={classes.card}>
            <span><FontAwesomeIcon icon={props.iconName} size='2x'/></span>
            <h5>{props.title}</h5>
        </div>  
    );
}

export default DashboardSubCard;