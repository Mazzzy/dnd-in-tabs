import React from 'react';
import { getTabData } from '../../data/faker-data-generator';
import ListItem from './ListItem';

function TabContent({ activeTab }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (activeTab.name) {
      setData(getTabData(activeTab));
    }
  }, [activeTab]);

  const moveItem = (dragIndex, hoverIndex) => {
    const updatedData = data.slice();
    const dragItem = updatedData[dragIndex];
    updatedData[dragIndex] = updatedData[hoverIndex];
    updatedData[hoverIndex] = dragItem;
    setData(updatedData);
  };

  const removeItem = (id, droppedTab) => {
    const filteredData = data.filter(v => v.username !== id);
    setData(filteredData);
  }

  return (
    <div className='tab-content'>
      <h4>{activeTab.name}</h4>
      {data.map((value, index) => (
        <ListItem 
            key={index}
            id={value.username}
            moveItem={moveItem}
            removeItem={removeItem}
            index={index}
        >
          <li>{value.name}</li>
          <li>{value.email}</li>
          <li>{value.username}</li>
          <li>{value.phone}</li>
          <li>{value.website}</li>
        </ListItem>
      ))}
    </div>
  );
}

export default TabContent;