import classes from './DownloadResumeBtn.module.css'
const DownloadResumeBtn = () => {
    return (
		<a href='https://docs.google.com/document/d/1ujnBivyJo4iOQwBSEBv1i1Wgl7bfAMBC6Lo7ZqfrX1Y/edit?usp=sharing' className={classes.downloadBtn} style={{textDecoration: 'none'}} target='_blank'>Download Resume</a>
    );
}

export default DownloadResumeBtn