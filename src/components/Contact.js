import classes from './Contact.module.css';
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

const Contact = (props) => {
	return (
        <div className={classes.container}>
            <div className={classes.title}>
                Contact / Socials:
            </div>
            {/* SENSETIVE INFORMATION, MAYBE PROCESS ENV AND GIT IGNORE?! Lookup best pract. */}
            <div className={classes.element}>
                <FaHome className={classes.logo} size={33}/>
                <p className={classes.desc}>Burlingame, California (Bay Area)</p>
            </div>
            <div className={classes.element}>
                <AiFillPhone className={classes.logo} size={33}/>
                <p className={classes.desc}>650 - 867 - 3376</p>
            </div>
            <div className={classes.element}>
                <MdEmail className={classes.logo} size={33}/>
                <p className={classes.desc}>megashelby@gmail.com</p>
            </div>
            <a className={classes.element} href='https://www.linkedin.com/in/shelby-sakamoto-076346141/' style={{textDecoration: 'none'}} id={classes.linkTag} target="_blank">
                <BsLinkedin className={classes.logo} size={33}/>
                <p className={classes.desc}>LinkedIn</p>
            </a>
            <a className={classes.element} href='https://github.com/MeteorMash101' style={{textDecoration: 'none'}} id={classes.linkTag} target="_blank">
                <VscGithub className={classes.logo} size={33}/>
                <p className={classes.desc}>Github</p>
            </a>
            <div className={classes.element}>
                <CgWebsite className={classes.logo} size={33}/>
                <p className={classes.desc}>Personal Website</p>
                {/* (Links to this same website, I made myself :) This could lead to recursion...) */}
            </div>

        </div>
	);
}

export default Contact;