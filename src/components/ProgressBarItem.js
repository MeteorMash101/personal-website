import classes from './ProgressBarItem.module.css';
import LinearProgress from '@mui/material/LinearProgress';
// EDIT: make table of contents

const ProgressBarItem = ({lang, level}) => {
    let fillVal = 0;
    let progBarStyle;
    switch (level) {
        case 1:
            // lang += " (Learning)"
            fillVal = 30
            progBarStyle = classes.pbs1
            break;
        case 2:
            // lang += " (Working Knowledge)"
            fillVal = 60
            progBarStyle = classes.pbs2
            break;
        case 3:
            // lang += " (Proficient)"
            fillVal = 98
            progBarStyle = classes.pbs3
            break;
    }
	return (
		<div className={classes.container}>
            <ul>
                <li>
                    <h4>{lang}</h4>
                    <div className={progBarStyle}>
                        <LinearProgress variant="determinate" color="inherit" value={fillVal}/>
                    </div>
                </li>
            </ul>

        </div>
	);
}

export default ProgressBarItem;