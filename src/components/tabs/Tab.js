import React from "react";

function Tab({ tab, onClick, activeTab }) {
    return (
      <li
        key={tab.name}
        className={`tab-list-item ${
          activeTab?.name === tab.name ? "tab-list-active" : ""
        }`}
        onClick={onClick}
      >
        {tab.name} ({tab.count})
      </li>
    );
}

export default Tab;