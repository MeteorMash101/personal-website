import classes from './ProgressBarItem.module.css';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBarItem = ({lang, level}) => {
    let fillVal = 0;
    let pbsLevelStyle;
    switch (level) {
        case 1:
            fillVal = 30
            pbsLevelStyle = classes.pbs1
            break;
        case 2:
            fillVal = 60
            pbsLevelStyle = classes.pbs2
            break;
        case 3:
            fillVal = 98
            pbsLevelStyle = classes.pbs3
            break;
    }
	return (
        <div className={classes.container}>
            <div className={classes.language}>{lang}</div>
            <div id={pbsLevelStyle}>
                <LinearProgress variant="determinate" color="inherit" value={fillVal}/>
            </div>
        </div>
	);
}

export default ProgressBarItem;