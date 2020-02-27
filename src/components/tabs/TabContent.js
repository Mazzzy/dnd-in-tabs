import React from "react";
import { getTabData } from "./data-generator";

function TabContent({ activeTab }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (activeTab.name) {
      setData(getTabData(activeTab));
    }
  }, [activeTab]);

  
  return (
    <div>
      <h1>{activeTab.name}</h1>
      {data.map((value, index) => (
        <div key={index}>
          <div>{value.name}</div>
          <div>{value.email}</div>
          <div>{value.username}</div>
          <div>{value.phone}</div>
          <div>{value.website}</div>
        </div>
      ))}
    </div>
  );
}

export default TabContent;