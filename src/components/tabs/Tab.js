import React from 'react';
import { useDrop } from 'react-dnd';

function Tab({ tab, onClick, activeTab, updateTabCounts, setDroppedTab, droppedTab }) {
  const [, drop] = useDrop({
    accept: 'CARD',
    id: 123,
    drop(item, monitor) {
      updateTabCounts(activeTab.name, tab.name);
      setDroppedTab(tab.name);
      setTimeout(() => setDroppedTab(), 300);
      return { tab };
    }
  });

  return (
    <li
      ref={drop}
      key={tab.name}
      className={`tab-list-item ${
        activeTab?.name === tab.name ? 'tab-list-active' : ''
       } ${
        droppedTab === tab.name ? 'tab-item-dropped' : ''
       }
      `}
      onClick={onClick}
    >
      {tab.name} ({tab.count})
    </li>
  );
}

export default Tab;