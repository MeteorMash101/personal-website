import profile_pic from '../imgs/profilepic.png';
import classes from './ProfilePic.module.css';
import { Fragment } from 'react';
import Contact from './Contact';

const ProfilePic = (props) => {
	const listOfQuotes = [
		"It does not matter how slowly you go as long as you do not stop.",
		"Compare yourself to who you were yesterday not to who someone else is today.",
		"Do it now. Sometimes 'later' becomes 'never'",
	]
	const randNum = Math.floor(Math.random() * 3);
	return (
		<div className={classes.container}>
			<img src={profile_pic} className={classes.pp}/>
			<Contact/>
			<a href='https://docs.google.com/document/d/10EZm0Hd3ug1AHDznrD8a5oHacSwYplnnj8uLPc8b1EQ/edit?usp=sharing' className={classes.downloadBtn} style={{textDecoration: 'none'}} target='_blank'>Download Resume</a>
			<div className={classes.quotes}>
				<h2 className={classes.quotesHeader}>Quote of the day...</h2>
				<div>{"\"" + listOfQuotes[randNum] + "\""}</div>
			</div>
		</div>
	);
}

export default ProfilePic;