import React, { useEffect } from "react";
import Tab from './Tab';
import './Tabs.css';

function Tabs({ tabs, render, firstTab, updateTabCounts }) {
    const [activeTab, setActiveTab] = React.useState();
    const [droppedTab, setDroppedTab] = React.useState();

    useEffect(() => {
      setActiveTab(firstTab);
    }, firstTab);
  
    if (!tabs.length) {
      return null;
    }
  
    return (
      <React.Fragment>
        <ul className="tabs">
          {tabs.map(tab => (
            <Tab
              key={tab.name}
              tab={tab}
              onClick={() => setActiveTab(tab)}
              activeTab={activeTab}
              updateTabCounts={updateTabCounts}
              setDroppedTab={setDroppedTab}
              droppedTab={droppedTab}
            />
          ))}
        </ul>
        {render(activeTab || {})}
      </React.Fragment>
    );
}

export default Tabs;