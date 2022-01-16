import classes from './MoreInfo.module.css';
import SkillsLearning from './SkillsLearning';
// import Fragment from 'react';

const MoreInfo = (props) => {
	return (
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <b>About me:</b><br/>
                    <p>Hello! My name is Shelby and welcome to my personal website! I am currently a senior Computer Science major at UC Davis, and will be graduating this Spring. I have a strong passion for software engineering/development, for nothing excites me more than seeing ideas come to life and make a positive impact on the world. Coding has definitely changed the way I think and approach everyday problems, and I truly believe that the technology of today will help solve the problems of tomorrow.</p>
                    <p>Enjoy browsing my site and please reach out if you have any opportunities available! Thank you, and please take care during this difficult time.</p>
                    <p id={classes.specialMsg}>*Currently pursuing Spring (internship) and Summer (internship / new grad) opportunities in the field of Software Engineering.*</p>
                </div>
                <SkillsLearning/>
            </div>
	);
}

export default MoreInfo;