import classes from './MarkdownView.module.css'
import { OPT_1, OPT_2, OPT_3, OPT_4, OPT_5, OPT_6 } from '../../constants';
import { Fragment } from 'react';
import cuteGif from '../../imgs/cute-dance.gif'

const MarkdownView = ({selectedTab}) => {
    const optObjsList = [OPT_1, OPT_2, OPT_3, OPT_4, OPT_5, OPT_6]
    let optObjsIdx = 0
    var root = document.querySelector(":root");
    switch(selectedTab) {
        case "OPT_1":
            optObjsIdx = 0
            root = document.querySelector(":root");
            root.style.setProperty("--scrollbar-color", "#e9b2b2");
            break;
        case "OPT_4":
            optObjsIdx = 3
            root = document.querySelector(":root");
            root.style.setProperty("--scrollbar-color", "rgb(203, 229, 196)");
            break;
        case "OPT_5":
            optObjsIdx = 4
            root = document.querySelector(":root");
            root.style.setProperty("--scrollbar-color", "rgb(231, 212, 236)");
            break;
        default:
            break;
    }
    const option = optObjsList[optObjsIdx];
    return (
        <div className={classes.container}>
            {option.desc && selectedTab == "OPT_5" &&
                <div className={classes.hobbiesTempContainer}>
                    <p className={classes.hobbiesPrettyText}>{option.desc}</p>
                    <img src={cuteGif} className={classes.hobbiesCuteGif} alt="woops"></img>
                </div>
            }
            {option.desc && selectedTab != "OPT_5" &&
                <p>{option.desc}</p>
            }
            {option.content && 
                option.content.map((content) => (
                    <div className={classes.contentItems}>
                        <h2 className={classes.contentTitle}>{content.title}</h2>
                        <h4 className={classes.contentDate}>{`${content.date} | ${content.location}`}</h4>
                        <ul>
                            {content.bullets.map((bullet) => (
                                <li className={classes.contentBullets}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default MarkdownView


