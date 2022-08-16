import classes from './ContentView.module.css';
import MarkdownView from './MarkdownView';
import SkillsView from '../SkillsView/SkillsView';
import { IoChevronDownOutline } from "react-icons/io5";

const ContentView = ({selectedTab}) => {
    let contentViewStyle = classes.opt1BG;
    switch(selectedTab) {
        case "OPT_1":
            contentViewStyle = classes.opt1BG;
            break;
        case "OPT_2":
            contentViewStyle = classes.opt2BG;
            break;
        case "OPT_3":
            contentViewStyle = classes.opt3BG;
            break;
        case "OPT_4":
            contentViewStyle = classes.opt4BG;
            break;
        case "OPT_5":
            contentViewStyle = classes.opt5BG;
            break;
        case "OPT_6":
            contentViewStyle = classes.opt6BG;
            break;
        default:
            contentViewStyle = classes.opt1BG;
            break;
    }
	return (
        <div className={classes.container} id={contentViewStyle}>
            {selectedTab == "OPT_1" &&
                <MarkdownView selectedTab={"OPT_1"}/>
            }
            {selectedTab == "OPT_2" &&
                <SkillsView/>
            }
            {selectedTab == "OPT_3" &&
                <div className={classes.tempMsg}>
                    {/* NOTE: Proj statuses here may not be updated, also I omitted school projs. */}
                    <h1>Scroll down below!</h1>
                    <IoChevronDownOutline size={40}/>
                </div>
            }
            {selectedTab == "OPT_4" &&
                <MarkdownView selectedTab={"OPT_4"}/>
            }
            {selectedTab == "OPT_5" &&
                <MarkdownView selectedTab={"OPT_5"}/>
            }
            {/* {selectedTab == "OPT_6" &&
                <ComingSoon/>
            } */}
        </div>
	);
}

export default ContentView;