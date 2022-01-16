import classes from './CardContent.module.css';

const CardContent = ({header, date, bulletpoints}) => {
	return (
            <div className={classes.container}>
                <b><span id={classes.hdr}>{header}</span></b><br/>
                <div id={classes.date}>{date}</div>
                <ul>
                    {bulletpoints.map((bp) => 
                        <li id={classes.lis}>{bp}</li>
                    )}
                </ul>
            </div>
	);
}

export default CardContent;