import classes from './TOC.module.css'
import { Fragment } from 'react';

const TOC = () => {
    return (
            <ul className={classes.context}>
                <p id={classes.text}>Click on the buttons to learn more!</p>
                <li id={classes.li1}>Work Experience</li>
                <li id={classes.li2}>Projects Showcase</li>
                <li id={classes.li3}>School / Other Activities</li>
            </ul>
    );
}

export default TOC