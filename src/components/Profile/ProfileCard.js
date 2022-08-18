import profile_pic from "../../imgs/profilepic.png"
import classes from './ProfileCard.module.css'
import { MOTTO, ABOUT_ME } from "../../constants";
import InfoSection from "../UI/InfoSection";
import ContactOpts from './ContactOpts';
import DownloadResumeBtn from '../DownloadResumeBtn';

const ProfileCard = () => {
    return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.topSection}>
					<img src={profile_pic} className={classes.pp}/>
					<div className={classes.nameQuoteContainer}>
						<h1 className={classes.name}>Shelby Sakamoto</h1>
						<p><i style={{color: "black"}} className={classes.quote}>{MOTTO}</i></p>
					</div>
				</div>
				<div className={classes.aboutMeContainer}>
					<InfoSection header="About me:">
						{ABOUT_ME}
					</InfoSection>
					<InfoSection header="Contact / Socials:">
						<ContactOpts/>
					</InfoSection>
				</div>
			</div>
			<DownloadResumeBtn/>
		</div>
    );
}

export default ProfileCard