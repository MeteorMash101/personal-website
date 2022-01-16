import classes from './NameHeader.module.css';
import { Fragment } from 'react';
import Quote from './Quote.js';

const NameHeader = (props) => {
	return (
		<div className={classes.container}>
			<h1 className={classes.nameHeader}>Shelby Sakamoto</h1>
			<div className={classes.liner}/>
			<Quote msg={"Coding for a better tomorrow..."}/>
		</div>
	);
}

export default NameHeader;