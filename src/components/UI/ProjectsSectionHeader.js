import classes from './ProjectsSectionHeader.module.css';
import { BiDownArrowAlt } from "react-icons/bi";


const ProjectsSectionHeader = () => {
	return (
        <div className={classes.container}>
            Projects
            <div className={classes.arrowBounce}>
                <BiDownArrowAlt/>
            </div>
        </div>
	);
}

export default ProjectsSectionHeader;