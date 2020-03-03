import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Tabs from '../components/tabs/Tabs';
import TabContent from '../components/tabs/TabContent';
import { getTabs } from '../data/faker-data-generator';

import './Home.css';

function Home() {
  const [tabs, setTabs] = React.useState([]);
  const [firstTab, setFirstTab] = React.useState();

  useEffect(() => {
    const tabs = getTabs();
    setTabs(tabs);
    setFirstTab(tabs[0]);
  }, []);

  const updateTabCounts = (activeTab, newTab) => {
    const updatedTabs = tabs.map(tab => {
      if (tab.name === activeTab) {
        return { ...tab, count: tab.count - 1 };
      }
      if (tab.name === newTab) {
        return { ...tab, count: tab.count + 1 };
      }
      return tab;
    });
    setTabs(updatedTabs);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='tabs-container'>
        <Tabs
          tabs={tabs}
          render={activeTab => {
            return <TabContent activeTab={activeTab} />;
          }}
          firstTab={firstTab}
          updateTabCounts={updateTabCounts}
        />
      </div>
    </DndProvider>
  );
}

export default Home;