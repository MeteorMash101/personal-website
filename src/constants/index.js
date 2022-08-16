// Constants being used across our app!
const MOTTO = '"Coding a better world..."' // 'for'?
const ABOUT_ME = "Recent CS major graduate from UC Davis with a strong passion for software engineering! I have experience in fullstack web & mobile app development, and am currently working to expand my knowledge of backend systems that impact billions around the world."

const WORK_HISTORY = [
    {
        title: "Software Engineer @ Meta",
        date: "August 2022 - Present",
        location: "Menlo Park, CA",
        bullets: [
            "I just started!"
        ]
    },
    {
        title: "Software Engineer Intern @ UCD CS Dept.",
        date: "January 2022 - June 2022",
        location: "Davis, CA",
        bullets: [
            "Fullstack web development to create a paper trading platform.",
            "Worked with a client from Google to meet project expectations & divided tasks in a team of 4."
        ]
    },
    {
        title: "Software Engineer Intern @ ASUCD Pantry",
        date: "January 2022 - March 2022",
        location: "Davis, CA",
        bullets: [
            "(More details to come as I currently work here.)",
            "Working on the backend of the Pantry website using Django’s MTV (Models, Templates, Views) style framework.", 
            "Maintaining the Inventory app and building the Users app as well as improving technical quality and improving usability and efficacy of the online system."
        ]
    },
    {
        title: "Software Engineer Intern @ Eyevocab",
        date: "September 2021 - December 2021",
        location: "Davis, CA",
        bullets: [
            "Built out a web application for students who are learning new languages through spaced repetition.", 
            "Brainstormed during meetings on how to organize relational datapoints such as Vocab Items, Collections, etc. by separating out such logic with different tables and creation of UUIDs (Unique User Identifications) to be able to tell which data belonged to which user.",
            "Implemented REST APIs and CRUD functionality whilst also keeping in constant communication with the Lead Programmer and the frontend team on how to go about designing new features.",
            "Tech Stack: ExpressJS, RethinkDB, Javascript/Typescript, ReactJS, Postman, Git, Github."
        ]
    },
    {
        title: "Computer Science & Math Tutor @ Superprof",
        date: "August 2020 - December 2021",
        location: "Remote",
        bullets: [
            "Gave teaching lessons to students of any grade level who needed help with their coursework regarding Computer Science & Math topics.", 
            "Walked through coding problems one-on-one with students who needed extra help in tackling difficult bugs together. Most of my students were learning Java, C++, or Python.",
            "Instead of simply providing them with the solution, I explain the underlying concepts more clearly, and then go back to the problem. This provides a better learning experience."
        ]
    },
]

const EDUCATIONAL_ACTIVITIES = [
    {
        title: "Frontend Engineer, ReactJS",
        date: "April 2022",
        location: "UC Davis",
        bullets: [
            "Worked in a team of 4 on a 'Cool Home Checklist' project idea approved by sponsors.",
            "Implemented gamification logic & functionality using various React hooks & context API for high level state management.",
            "Explained the convenience and reusability of our app to interested guests.",
            "Demo Link: https://teal-entremet-fb37d8.netlify.app/home",
            "Github Link: https://github.com/joluna198/hackdavis",
        ]
    },
    {
        title: "Backend Engineer, ML Infrastructure",
        date: "September 2021 - December 2021",
        location: "UC Davis",
        bullets: [
        	"For our final group project, we worked on building a \"Credit Card Fraud Detector\" using various ML tools in python", 
            "As a team, we applied what we learned in class through stages of: Data Analysis, Feature Selection, Training/Testing the Model, etc.",
            "Results generated 99.8% accuracy when model was tested on unseen data.",
            "I specifically focused on serializing our models and creating API endpoints to get results from our model given user input for the web application.",
            "Github Link: https://github.com/ethanaturner/ecs171-card-fraud-detection",
            "Tech Stack: Python, Jupyter Notebook, TensorFlow, Pandas, Numpy, Keras, ReactJS, Typescript, Flask",
        ]
    },
    {
        title: "Fullstack Developer, Web Programming",
        date: "March 2021 - June 2021",
        location: "UC Davis",
        bullets: [
            "Worked and collaborated with 4 different teams on 4 different projects.", 
            "As fullstack, I worked mainly on creating APIs on the backend, and making sure we can call them properly from the frontend.",
            "Our final team project, a \"Family Income Financial Aid Calculator App\", was selected to be published on the \"Manetti Shrem Museum\"'s official website!",
            "Link To Our Featured Website: https://shop-til-you-drop.profamenta.repl.co/",
            "Learn More: https://manettishremmuseum.ucdavis.edu/education-should-be-free",
            "Tech Stack: HTML, CSS, Javascript, ExpressJS, ReactJS, SQLLite, Replit, Git/Github."
        ]
    },
    {
        title: "Club Member, Davis Computer Science Club",
        date: "March 2021 - June 2022",
        location: "UC Davis",
        bullets: [
            "Participated in leetcode challenges every week.", 
            "Discussed optimal solutions and went over difficult problems for practice and for fun!",
        ]
    },
    {
        title: "LRU Cache Project, Computer Architecture",
        date: "January 2021 - March 2021",
        location: "UC Davis",
        bullets: [
            "Spent over 150+ hours over a 3 week timespan working with logism program to create a cache simulator.", 
            "An extremely fun brain exercise where logical programming thinking/skills came in handy when connecting wires and stuff.",
            "Achieved a 98.5% hit accuracy rate when submitted to the auto-grader."
        ]
    },
    {
        title: "CAL Hacks @ UC Berkeley, x4 Attendee/Hacker",
        date: "August 2016 - August 2018",
        location: "UC Berkeley",
        bullets: [
        	"Participated in hacker challenges such as iOS/Web dev. project building, algorithms for fun, playing with VR, etc.", 
            "Volunteered and assisted with running the hackathon composed of over few hundreds of hackers all gathered in one viscinity (pre-covid!!).",
            "An enjoyable 3-day, all day experience with friends and making new connections, sponsors, and seeing a lot of great ideas come to fruition."
        ]
    },
]

const SKILLS_LEARNING = [
    // the levels of language proficiency: 
    // Learning (1), Working Knowledge (2), Proficient (3)
    {
        language: "Java",
        level: 3
    },
    {
        language: "Python",
        level: 3
    },
    {
        language: "C++",
        level: 3
    },
    {
        language: "Javascript",
        level: 3
    },
    {
        language: "HTML",
        level: 3
    },
    {
        language: "CSS",
        level: 3
    },
    {
        language: "ReactJS",
        level: 3
    },
    {
        language: "Django",
        level: 3
    },
    {
        language: "PostgreSQL",
        level: 3
    },
    {
        language: "ExpressJS",
        level: 3
    },
    {
        language: "MongoDB",
        level: 3
    },
    {
        language: "MySQL",
        level: 3
    },
    {
        language: "Ruby",
        level: 2
    },
    {
        language: "Ruby on Rails",
        level: 2
    },
    {
        language: "Spring",
        level: 1
    },
    {
        language: "C",
        level: 1
    },
]

const PROJECTS_INFO = [
    {
        name: "Paper Trading Platform",
        desc: "A google-cloud based platform where users (new to investing) can practice trading using real-time live stock data.",
        techStack: ["Javascript/HTML/CSS", "React.js", "Django", "Python", "Google App Engine", "Google Cloud Services"],
        status: 2,
        githubLink: "https://github.com/MeteorMash101/paper-trading-platform",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/paper-trading-platform/pic_1.png",
            "./project_thumbnails/paper-trading-platform/pic_2.png",
            "./project_thumbnails/paper-trading-platform/pic_3.png",
            "./project_thumbnails/paper-trading-platform/pic_4.png",
            "./project_thumbnails/paper-trading-platform/pic_5.png",
            "./project_thumbnails/paper-trading-platform/pic_6.png",
            "./project_thumbnails/paper-trading-platform/pic_7.png",
        ]
    },
    {
        name: "Seenit",
        desc: "Reddit-clone website, full-stack clone with subreddits, posts, comments, users, etc.",
        techStack: ["Javascript/HTML/CSS", "React.js", "Express.js", "Mongodb", "Node"],
        status: 3,
        githubLink: "https://github.com/MeteorMash101/seenit-reddit-clone",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/seenit-reddit-clone/pics_1.png",
            "./project_thumbnails/seenit-reddit-clone/pics_2.png",
            "./project_thumbnails/seenit-reddit-clone/pics_3.png",
            "./project_thumbnails/seenit-reddit-clone/pics_4.png",
            "./project_thumbnails/seenit-reddit-clone/pics_5.png",
        ]
    },
    {
        name: "Java Jukebox",
        desc: "Created a music player for the CLI using Java.",
        techStack: ["Java", "Command Line Interface"],
        status: 2,
        githubLink: "https://github.com/MeteorMash101/Java-Jukebox",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/Java-Jukebox/pics_1.png",
            "./project_thumbnails/Java-Jukebox/pics_2.png",
            "./project_thumbnails/Java-Jukebox/pics_3.png",
            "./project_thumbnails/Java-Jukebox/pics_4.png",
        ]
    },
    {
        name: "Specificity",
        desc: "Goal-based software app, helping people be more specific with their goals and ambitions so they can achieve them.",
        techStack: ["Javascript/HTML/CSS", "React", "Express", "MySQL", "Node"],
        status: 3,
        githubLink: "https://github.com/MeteorMash101/specificity",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/specificity/pics_1.png",
            "./project_thumbnails/specificity/pics_2.png",
            "./project_thumbnails/specificity/pics_3.png",
            "./project_thumbnails/specificity/pics_4.png",
        ]
    },
    {
        name: "Fitness Tracker",
        desc: "Fitness website for users to be able to keep track of, and save their exercise acitivities and plans.",
        techStack: ["Javascript/HTML/CSS", "Express", "SQLLite"],
        status: 3,
        githubLink: "https://github.com/MeteorMash101/fitness-tracker",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/fitness-tracker/pics_1.png",
            "./project_thumbnails/fitness-tracker/pics_2.png",
            "./project_thumbnails/fitness-tracker/pics_3.png",
        ]
    },
    {
        name: "Virus Simulator",
        desc: "Created a virus visualizer using weighted nodes that simulate random human movement as realistic as possible.",
        techStack: ["Java", "Java Swing", "Java AWT", "Command Line Interface"],
        status: 2,
        githubLink: "https://github.com/MeteorMash101/VirusSimulator",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/VirusSimulator/pic_1.png",
            "./project_thumbnails/VirusSimulator/pic_2.png",
        ]
    },
    {
        name: "B&W Photo Blog",
        desc: "Still largely a work in progress. Just a beautiful place to post nice photos, always comes out in vintage B&W.",
        techStack: ["Javascript/HTML/CSS", "MySQL", "Express.js"],
        status: 1,
        githubLink: "https://github.com/MeteorMash101/b-w-photo-blog",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/b-w-photo-blog/pic_1.png",
        ]
    },
    {
        name: "AOE-Task-Manager",
        desc: "Given activitiies, and events, identifies critical paths (longest paths)",
        techStack: ["Java"],
        status: 2,
        githubLink: "https://github.com/MeteorMash101/AOE-Task-Manager",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/AOE-Task-Manager/javaLogo.png",
        ]
    },
    {
        name: "ImageComponentLabeling",
        desc: "Labels 1/0's using bfs / dfs (non-recursive way for now) of images",
        techStack: ["Java"],
        status: 2,
        githubLink: "https://github.com/MeteorMash101/ImageComponentLabeling",
        demoLink: null, // optional
        imgPaths: [
            "./project_thumbnails/ImageComponentLabeling/javaLogo.png",
        ]
    },
]

// Available tabs options:
const OPT_1 = {
    id: "OPT_1",
    label: "Experience",
    desc: null, // optional
    content: WORK_HISTORY // optional
}

const OPT_2 = {
    id: "OPT_2",
    label: "Skills",
    desc: "Here I label 'Proficient', 'Working Knowledge', and 'Learning' as my 3 levels of proficiency. I understand that there is always more to learn!", // optional
    content: SKILLS_LEARNING
}

const OPT_3 = {
    id: "OPT_3",
    label: "Projects",
    desc: "Building side projects is by far and away the best way to learn and experiment with new technologies. Hence why I enjoy doing them! DISCLAIMER: No project is ever 'ditched' upon completion; there will always be a need to clean, maintain, and keep up to date the codebase in relation to the latest technologies. This is my philosophy.",
    content: PROJECTS_INFO
}

const OPT_4 = {
    id: "OPT_4",
    label: "Education",
    desc: null,
    content: EDUCATIONAL_ACTIVITIES,
}

const OPT_5 = {
    id: "OPT_5",
    label: "Hobbies",
    desc: "My hobbies include coding (...yes), music production, PC building/gaming, anime, cooking, spending time with family and friends, as well as going on traveling adventures (touching grass!! outdoors!!)",
    content: null
}

const OPT_6 = {
    id: "OPT_6",
    label: "YouTube",
    desc: null,
    content: null
}

export {
    MOTTO,
    ABOUT_ME,
    OPT_1, OPT_2, OPT_3, OPT_4, OPT_5, OPT_6,
    WORK_HISTORY,
    EDUCATIONAL_ACTIVITIES,
    SKILLS_LEARNING,
    PROJECTS_INFO
}


/* DEPRECIATED CONTENT: 
export const ABOUT_ME = "Hello! My name is Shelby and I am a recent Computer Science major graduate from UC Davis. I have a strong passion for software engineering, especially when it comes to web & mobile development! I plan to continue applying my knowledge and skills to solve real world problems.";
*/