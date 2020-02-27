import React from "react";

function Tab({ tab, onClick, activeTab }) {
    return (
      <li
        ref={drop}
        key={tab.name}
        className={`tabItem ${
          activeTab?.name === tab.name ? "tabItem--active" : ""
        }`}
        onClick={onClick}
      >
        {tab.name} ({tab.count})
      </li>
    );
}

export default Tab;