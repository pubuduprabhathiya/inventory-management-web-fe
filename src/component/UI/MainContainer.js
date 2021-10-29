import classes from './MainContainer.module.css';

const MainContainer = (props)=>{
    return(
        <div className={classes.container}>
            <div className={classes.titleContainer}><p>{props.title}</p></div> 
            <div className={classes.content}>
                <div className={classes.main}>
                    <div className={classes.items}>{props.children}</div>
                </div>
            </div>
        </div>
    );
    
}

export default MainContainer;