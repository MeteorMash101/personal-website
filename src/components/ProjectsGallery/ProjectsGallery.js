import classes from './ProjectsGallery.module.css'
import ProjectCard from './ProjectCard';
import { PROJECTS_INFO } from '../../constants';

const ProjectsGallery = () => {
	return (
		<div className={classes.container}>
			{PROJECTS_INFO.map((projInfo) => (
					<ProjectCard imageURLs={projInfo.imgPaths} name={projInfo.name} desc={projInfo.desc} techStack={projInfo.techStack} status={projInfo.status} githubLink={projInfo.githubLink}/>
                ))
            }
		</div>
    )
}

export default ProjectsGallery