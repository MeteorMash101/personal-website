import classes from './SkillsView.module.css'
import ProgressBarItem from './ProgressBarItem';
import { SKILLS_LEARNING } from '../../constants';

const SkillsView = () => {
    return (
        <div className={classes.container}>
            {/* Table of Contents */}
            <ul className={classes.tableOfContents}>
                <li id={classes.l3}>Proficient</li>
                <li id={classes.l2}>Working Knowledge</li>
                <li id={classes.l1}>Learning</li>
            </ul>
            <div className={classes.progBarcontainer}>
                {/* B/C OF (TEMPORARY) MESSED UP FORMATTING, ADD ENOUGH ITEMS HERE! */}
                {SKILLS_LEARNING.map((skill) => (
                    <ProgressBarItem lang={skill.language} level={skill.level}/>
                ))}
            </div>
        </div>
    );
}

export default SkillsView