import classes from './Banner.module.css';

const Banner = () => {
	return (
        <div className={classes.container}>
            <div className={classes.line} id={classes.red}/>
            <div className={classes.line} id={classes.green}/>
            <div className={classes.line} id={classes.blue}/>
        </div>
	);
}

export default Banner;