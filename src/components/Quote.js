import classes from './Quote.module.css'

const Quote = ({msg}) => {
    msg += "\""
    msg = "\"" + msg
    return (
		<div className={classes.container}>
            {msg}
		</div>
    );
}

export default Quote