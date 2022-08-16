import classes from './TopSectionWrapper.module.css';

const TopSectionWrapper = (props) => {
	return (
        <div className={classes.container}>
            {props.children}
        </div>
	);
}

export default TopSectionWrapper;