import classes from './SkillsLearning.module.css';
import ProgressBarItem from './ProgressBarItem';

const SkillsLearning = (props) => {
	const title = "Tools & Technologies:"
	// the levels of language proficiency: Learning, Working Knowledge, Proficient
	const L1 = 1, L2 = 2, L3 = 3
	return (
		<div className={classes.container}>
            <div className={classes.title}><b>{title}</b></div>
			<ul className={classes.context}>
				<li id={classes.l3}>Proficient</li>
				<li id={classes.l2}>Working Knowledge</li>
				<li id={classes.l1}>Learning</li>
			</ul>
			<div className={classes.wrapper}>
				<ProgressBarItem lang={"Java"} level={L3}/>
				<ProgressBarItem lang={"Python"} level={L3}/>
				<ProgressBarItem lang={"C++"} level={L3}/>
				<ProgressBarItem lang={"Javascript"} level={L3}/>
				<ProgressBarItem lang={"HTML"} level={L3}/>
				<ProgressBarItem lang={"CSS"} level={L3}/>
				<ProgressBarItem lang={"ReactJS"} level={L3}/>
				<ProgressBarItem lang={"Django"} level={L2}/>
				<ProgressBarItem lang={"PostgreSQL"} level={L2}/>
				<ProgressBarItem lang={"ExpressJS"} level={L2}/>
				<ProgressBarItem lang={"MongoDB"} level={L2}/>
				{/* <ProgressBarItem lang={"UNIX/Assembly"} level={L2}/> */}
				<ProgressBarItem lang={"ML Tools"} level={L2}/>
				<ProgressBarItem lang={"Ruby/Rails"} level={L1}/>
				<ProgressBarItem lang={"Spring"} level={L1}/>
				<ProgressBarItem lang={"C"} level={L1}/>
			</div>
        </div>
	);
}

export default SkillsLearning;