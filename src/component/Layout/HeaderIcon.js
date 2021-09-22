import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classes from './HeaderIcon.module.css';

const HeaderIcon = (props)=>{
    return(
        <span className={classes.icon}>
            <FontAwesomeIcon icon='bell'/>
        </span>
    );
}

export default HeaderIcon;