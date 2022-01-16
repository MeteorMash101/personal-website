import classes from './GitBox.module.css'
import { AiFillGithub } from "react-icons/ai";
// STATUSES: Design Stage, In Progress, Maintained

const GitBox = ({link, title, desc, status}) => {
    let statusStyle = "";
    switch (status) {
        case "1":
            status = "Design Stage"
            statusStyle = classes.status1
            break;
        case "2":
            status = "In Progress"
            statusStyle = classes.status2
            break;
        case "3":
            status = "Maintained"
            statusStyle = classes.status3
            break;
    }
    return (
        <a className={classes.container} href={link} style={{textDecoration: 'none'}} target="_blank">
            <div className={classes.title}>{title}</div>
            <div className={classes.desc}>{desc}</div>
            <div className={classes.status}>Status: <span id={statusStyle}>{status}</span></div>
            <AiFillGithub className={classes.logo}/>
        </a>
    );
}

export default GitBox