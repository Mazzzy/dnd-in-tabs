import React, { useEffect } from "react";
import Tab from './Tab';

function Tabs({ tabs, render, firstTab }) {
    const [activeTab, setActiveTab] = React.useState();
    
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
            />
          ))}
        </ul>
        {render(activeTab || {})}
      </React.Fragment>
    );
}

export default Tabs;