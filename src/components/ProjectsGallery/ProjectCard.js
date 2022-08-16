import classes from './ProjectCard.module.css'
import { AiFillGithub } from "react-icons/ai";
import Slideshow from './Slideshow';
import { useState } from 'react';
// STATUSES: In Progress, Completed, Maintained

const ProjectCard = ({imageURLs, name, desc, techStack, status, githubLink}) => {
    const [showSlideshowBtns, setShowSlideshowBtns]= useState(false);
    let statusLevelStyle = "";
    switch (status) {
        case 1:
            status = "In Progress"
            statusLevelStyle = classes.status1
            break;
        case 2:
            status = "Completed"
            statusLevelStyle = classes.status2
            break;
        case 3:
            status = "Maintained"
            statusLevelStyle = classes.status3
            break;
    }
    // Only show the slideshow btn opts on hover...
    const onMouseEnterHandler = () => {
        setShowSlideshowBtns(true);
    }
    const onMouseLeaveHandler = () => {
        setShowSlideshowBtns(false);
    }
    const [imgIdx, setImgIdx] = useState(0);
	const onClickBackHandler = () => {
		setImgIdx(prevImgIdx => prevImgIdx - 1)
	}
	const onClickForwardHandler = () => {
		setImgIdx(prevImgIdx => prevImgIdx + 1)
	}
    // console.log(imgIdx, typeof(imageURLs[imgIdx]))
    return (
        <div className={classes.container} style={{textDecoration: 'none'}} target="_blank" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {showSlideshowBtns && 
                <Slideshow 
                    onClickBack={onClickBackHandler} 
                    onClickForward={onClickForwardHandler}
                    currImgIdx={imgIdx}
                    numOfImages={imageURLs.length}
                />
            }
            <img src={require(`${imageURLs[imgIdx]}`)} className={classes.picture}/>
            <h1 className={classes.name}>{name}</h1>
            <p className={classes.desc}><b>Desc:</b> {desc}</p>
            <p className={classes.tstack}><b>Tech Stack:</b> {techStack.join(", ")}</p>
            <div className={classes.bottomOpts}>
                <div className={classes.status} id={statusLevelStyle}>{status}</div>
                <a className={classes.githubLogoAnchorTag} style={{textDecoration: 'none'}} href={githubLink}>
                    <AiFillGithub className={classes.githubLogo}/>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard