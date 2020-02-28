import React from 'react';
import { getTabData } from '../../data/faker-data-generator';

function TabContent({ activeTab }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (activeTab.name) {
      setData(getTabData(activeTab));
    }
  }, [activeTab]);

  
  return (
    <div className='tab-content'>
      <h4>{activeTab.name}</h4>
      {data.map((value, index) => (
        <ul key={index} className='content-list'>
          <li>{value.name}</li>
          <li>{value.email}</li>
          <li>{value.username}</li>
          <li>{value.phone}</li>
          <li>{value.website}</li>
        </ul>
      ))}
    </div>
  );
}

export default TabContent;