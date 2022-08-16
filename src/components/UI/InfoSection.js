import classes from './InfoSection.module.css'

const InfoSection = (props) => {
    return (
		<div className={classes.container}>
      <b>{props.header}</b><br/>
      {props.children}
		</div>
    );
}

export default InfoSection