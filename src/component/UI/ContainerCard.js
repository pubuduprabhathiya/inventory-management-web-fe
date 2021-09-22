import classes from './ContainerCard.module.css';

const ContainerCard = (props)=>{
    return(
        <div className={classes.container}>
            <div className={classes.titleContainer}><p>{props.title}</p></div> 
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
    
}

export default ContainerCard;