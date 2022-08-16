import classes from './TabSelector.module.css'
import { OPT_1, OPT_2, OPT_3, OPT_4, OPT_5, OPT_6 } from '../../constants';
import Tab from './Tab';

const TabSelector = ({selectedTab, onTabChange}) => {
    return (
        <div className={classes.container}>
            <Tab selectedTab={selectedTab} tabID={OPT_1.id} label={OPT_1.label} onTabChange={onTabChange}/>
            <Tab selectedTab={selectedTab} tabID={OPT_2.id} label={OPT_2.label} onTabChange={onTabChange}/>
            <Tab selectedTab={selectedTab} tabID={OPT_3.id} label={OPT_3.label} onTabChange={onTabChange}/>
            <Tab selectedTab={selectedTab} tabID={OPT_4.id} label={OPT_4.label} onTabChange={onTabChange}/>
            <Tab selectedTab={selectedTab} tabID={OPT_5.id} label={OPT_5.label} onTabChange={onTabChange}/>
            <Tab selectedTab={selectedTab} tabID={OPT_6.id} label={OPT_6.label} onTabChange={onTabChange}/>
        </div>
    );
}

export default TabSelector