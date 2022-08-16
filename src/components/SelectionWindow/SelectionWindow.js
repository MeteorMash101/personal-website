import classes from './SelectionWindow.module.css';
import { Fragment, useState } from 'react';
import { WORK_HISTORY } from '../../constants';
import TabSelector from './TabSelector';
import ContentView from './ContentView';

const SelectionWindow = () => {
    const [tab, setTab] = useState("OPT_1");
    const tabChangeHandler = (tabID) => {
        switch(tabID) {
            case "OPT_1":
                setTab("OPT_1")
                break;
            case "OPT_2":
                setTab("OPT_2")
                break;
            case "OPT_3":
                setTab("OPT_3")
                break;
            case "OPT_4":
                setTab("OPT_4")
                break;
            case "OPT_5":
                setTab("OPT_5")
                break;
            case "OPT_6":
                setTab("OPT_6")
                break;
            default:
                setTab("OPT_1")
                break;
        }
	}
	return (
        <div className={classes.container}>
            <TabSelector selectedTab={tab} onTabChange={tabChangeHandler}/>
            <ContentView selectedTab={tab}/>
        </div>
	);
}

export default SelectionWindow;