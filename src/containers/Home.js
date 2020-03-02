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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='tabs-container'>
        <Tabs
          tabs={tabs}
          render={activeTab => {
            return <TabContent activeTab={activeTab} />;
          }}
          firstTab={firstTab}
        />
      </div>
    </DndProvider>
  );
}

export default Home;