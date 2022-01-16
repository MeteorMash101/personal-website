import ProfilePic from "./ProfilePic"
import MoreInfo from "./MoreInfo"
import classes from './ProfileSection.module.css'

const ProfileSection = () => {
    return (
		<div className={classes.container}>
			{/* Re-factor these classes so its not just mushed in like that...? */}
			<ProfilePic/>
			<MoreInfo/>
		</div>
    );
}

export default ProfileSection