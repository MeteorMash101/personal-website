import classes from './Tab.module.css'

const Tab = ({selectedTab, tabID, label, onTabChange}) => {
    let tabStyle = classes.opt1
    switch (tabID) {
        case "OPT_1":
            tabStyle = classes.opt1
            break;
        case "OPT_2":
            tabStyle = classes.opt2
            break;
        case "OPT_3":
            tabStyle = classes.opt3
            break;
        case "OPT_4":
            tabStyle = classes.opt4
            break;        
        case "OPT_5":
            tabStyle = classes.opt5
            break;        
        case "OPT_6":
            tabStyle = classes.opt6
            break;
        default:
            tabStyle = classes.opt1
            break;
    }
    let selectedTabStyle = ""
    if (selectedTab == tabID) {
        switch (selectedTab) {
            case "OPT_1":
                selectedTabStyle = classes.opt1Selected
                break;
            case "OPT_2":
                selectedTabStyle = classes.opt2Selected
                break;
            case "OPT_3":
                selectedTabStyle = classes.opt3Selected
                break;
            case "OPT_4":
                selectedTabStyle = classes.opt4Selected
                break;        
            case "OPT_5":
                selectedTabStyle = classes.opt5Selected
                break;        
            case "OPT_6":
                selectedTabStyle = classes.opt6Selected
                break;
            default:
                selectedTabStyle = classes.opt1Selected
                break;
        }   
    }
    
    const onTabChangeHandler = (event) => {
        event.preventDefault();
        onTabChange(tabID)
    }
    return (
        <div className={`${classes.container} ${tabStyle}`} id={selectedTabStyle} onClick={onTabChangeHandler}>
            <h1 className={classes.label}>{label}</h1>
        </div>
    );
}

export default Tab