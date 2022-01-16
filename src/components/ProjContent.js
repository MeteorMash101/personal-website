import classes from './ProjContent.module.css'
import GitBox from './GitBox'
const ProjContent = () => {
    const S1 = "1", S2 = "2", S3 = "3"; // 'status/state' of proj.
    return (
    // Projs: "Seenit", "Java Jukebox", "Fitness Tracker", "Virus Simulator", "Specificity", "Product Payments"
		<div className={classes.container}>
            <GitBox link={"https://github.com/MeteorMash101/seenit-reddit-clone"} title={"Seenit"} desc={"Reddit-clone website, full-stack clone with subreddits, posts, comments, users, etc."} status={S3}/>
            <GitBox link={"https://github.com/MeteorMash101/Java-Jukebox"} title={"Java Jukebox"} desc={"Created a music player for the CLI using Java."} status={S3}/>
            <GitBox link={"https://github.com/MeteorMash101/fitness-tracker"} title={"Fitness Tracker"} desc={"Fitness website for users to be able to keep track of, and save their exercise acitivities and plans."} status={S3}/>
            <GitBox link={"https://github.com/MeteorMash101/VirusSimulator"} title={"Virus Simulator"} desc={"Created a virus visualizer using weighted nodes that simulate random human movement as realistic as possible."} status={S3}/>
            <GitBox link={"https://github.com/MeteorMash101/specificity"} title={"Specificity"} desc={"Goal-based software app, helping people be more specific with their goals and ambitions so they can achieve them."} status={S2}/>
            <GitBox link={"https://github.com/MeteorMash101/product-project"} title={"Product Payments"} desc={"A practice website for testing out how online payments work."} status={S1}/>
            {/* put comment below */}
            {/* DISCLAIMER: No project is ever 'ditched' upon completion; there will always be a need to clean, maintain, and keep up to date the codebase in relation to the latest technologies.*/}
		</div>
    );
}

export default ProjContent