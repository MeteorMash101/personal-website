import './ButtonSection.css';
import { Fragment, useState } from 'react';
import ProjContent from './ProjContent';
import TOC from './TOC';
import CardContent from './CardContent';

const ButtonSection = (props) => {
	const [color, setColor] = useState("GREEN");
	const colorChangeHandler = (event) => {
		if (event.target.id == "btnOpt1" || event.target.id == "inset1") {
			setColor("RED");
		} else if (event.target.id == "btnOpt2" || event.target.id == "inset2") {
			setColor("GREEN");
		} else if (event.target.id == "btnOpt3" || event.target.id == "inset3") {
			setColor("BLUE");
		}
	}
	return (
		<div className='container'>
			<div className="btnContainer">
				<div className="btnOpt" id="btnOpt1" onClick={colorChangeHandler}><div className="inset" id="inset1"></div></div>
				<div className="btnOpt" id="btnOpt2" onClick={colorChangeHandler}><div className="inset" id="inset2"></div></div>
				<div className="btnOpt" id="btnOpt3" onClick={colorChangeHandler}><div className="inset" id="inset3"></div></div>
				<TOC/>
			</div>
			{/* RED CARD */}
			{(color === "RED") &&
			<div className="cardContainer" id="redCard">
				<h3 id='redCardTitle'>Work Experience</h3>
				<CardContent 
					header={"Software Engineering Internship @ ASUCD Pantry"} 
					date={"January 2022 - Present"}
					bulletpoints={[
						"(More details to come as I currently work here.)",
						"Working on the backend of the Pantry website using Django’s MTV (Models, Templates, Views) style framework.", 
						"Maintaining the Inventory app and building the Users app as well as improving technical quality and improving usability and efficacy of the online system."
					]}
				/>
				<CardContent 
					header={"Software Engineering Internship @ Eyevocab"} 
					date={"September 2021 - December 2021"}
					bulletpoints={[
						"Built out a web application for students who are learning new languages through spaced repetition.", 
						"Brainstormed during meetings on how to organize relational datapoints such as Vocab Items, Collections, etc. by separating out such logic with different tables and creation of UUIDs (Unique User Identifications) to be able to tell which data belonged to which user.",
						"Implemented REST APIs and CRUD functionality whilst also keeping in constant communication with the Lead Programmer and the frontend team on how to go about designing new features.",
						"Tech Stack: ExpressJS, RethinkDB, Javascript/Typescript, ReactJS, Postman, Git, Github."
					]}
				/>
				<CardContent 
					header={"Computer Science & Math Tutor"} 
					date={"August 2020 - December 2021"}
					bulletpoints={[
						"Gave teaching lessons to students of any grade level who needed help with their coursework regarding Computer Science & Math topics.", 
						"Walked through coding problems one-on-one with students who needed extra help in tackling difficult bugs together. Most of my students were learning Java, C++, or Python.",
						"Instead of simply providing them with the solution, I explain the underlying concepts more clearly, and then go back to the problem. This provides a better learning experience."
					]}
				/>
			</div>}
			{/* GREEN CARD */}
			{(color === "GREEN") &&
			<div className="cardContainer" id="greenCard">
				<h3 id='greenCardTitle'>Projects Showcase</h3>
				<p id='greenCardSubTitle'>Building side projects is by far and away the best way to learn and experiment with new technologies.<br/>Hence why I enjoy doing them!</p>
				<ProjContent/>
			</div>}
			{/* BLUE CARD */}
			{(color === "BLUE") &&
			<div className="cardContainer" id="blueCard">
				<h3 id='blueCardTitle'>School / Other Activities</h3>
				<CardContent 
					header={"Backend Engineer, Machine Learning"} 
					date={"September 2021 - December 2021"}
					bulletpoints={[
						"For our final group project, we worked on building a \"Credit Card Fraud Detector\" using various ML tools in python", 
						"As a team, we applied what we learned in class through stages of: Data Analysis, Feature Selection, Training/Testing the Model, etc.",
						"Results generated 99.8% accuracy when model was tested on unseen data.",
						"For my role, I worked on serializing the ML Models and creating the API endpoints in Flask for the web application. Given any user input, we return the prediction of the model.",
						"Tech Stack: Python, Jupyter Notebook, TensorFlow, Pandas, Numpy, Keras, ReactJS, Typescript, Flask",
						"Github Link: https://github.com/ethanaturner/ecs171-card-fraud-detection"
					]}
				/>
				<CardContent 
					header={"Fullstack Developer, Web Programming"} 
					date={"March 2021 - June 2021"}
					bulletpoints={[
						"Worked and collaborated with 4 different teams on 4 different projects.", 
						"As fullstack, I worked mainly on making APIs on the backend, and making sure we can call them from the frontend",
						"Our final team project, a \"Family Income Financial Aid Calculator App\", was selected to be published on the \"Manetti Shrem Museum\"'s official website.",
						"Tech Stack: HTML, CSS, Javascript, ExpressJS, ReactJS, SQLLite, Replit, Git/Github."
					]}
				/>
				<CardContent 
					header={"Club Member, Davis Computer Science Club"} 
					date={"March 2021 - Present"}
					bulletpoints={[
						"Participated in leetcode challenges every week.", 
						"Discussed optimal solutions and went over difficult problems for practice and for fun!",
					]}
				/>
				<CardContent 
					header={"LRU Cache Project, Computer Architecture"} 
					date={"January 2021 - March 2021"}
					bulletpoints={[
						"Spent over 150+ hours over a 3 week timespan working with logism program to create a cache simulator.", 
						"An extremely fun brain exercise where logical programming thinking/skills came in handy when connecting wires and stuff.",
						"Achieved a 98.5% hit accuracy rate when submitted to the auto-grader."
					]}
				/>
				<CardContent 
					header={"CAL Hacks @ UC Berkeley, x4 Attendee/Hacker"} 
					date={"August 2016 - August 2018"}
					bulletpoints={[
						"Participated in hacker challenges such as iOS/Web dev. project building, algorithms for fun, playing with VR, etc.", 
						"Volunteered and assisted with running the hackathon composed of over few hundreds of hackers all gathered in one viscinity (pre-covid!!).",
						"An enjoyable 3-day, all day experience with friends and making new connections, with sponsors, and seeing a lot of great ideas come to fruition."
					]}
				/>
				<p className='hobbies'>My hobbies include coding (...yes), music production, PC building/gaming, anime, cooking, spending time with family and friends, as well as going on hiking adventures (outdoors!!)</p>
			</div>}
		</div>
	);
}

export default ButtonSection;