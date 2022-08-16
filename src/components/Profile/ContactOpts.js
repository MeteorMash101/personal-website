import classes from './ContactOpts.module.css';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { Fragment } from 'react';

const ContactOpts = (props) => {
    const iconSize = 23;
	return (
        <Fragment>
            <div className={classes.option}>
                <IoLocationSharp size={iconSize}/>
                <p className={classes.desc}>Bay Area, California</p>
            </div>
            <div className={classes.option}>
                <MdEmail size={iconSize}/>
                <p className={classes.desc}>megashelby@gmail.com</p>
            </div>
            <div className={classes.option}>
                <a className={classes.linkOption} href='https://www.linkedin.com/in/shelby-sakamoto-076346141/' style={{textDecoration: 'none'}} id={classes.linkedin} target="_blank">
                    <BsLinkedin size={iconSize}/>
                    <p className={classes.desc}>LinkedIn</p>
                </a>
            </div>
            <div className={classes.option}>
                <a className={classes.linkOption} href='https://github.com/MeteorMash101' style={{textDecoration: 'none'}} id={classes.github} target="_blank">
                    <VscGithub size={iconSize}/>
                    <p className={classes.desc}>Github</p>
                </a>
            </div>
        </Fragment>
	);
}

export default ContactOpts;