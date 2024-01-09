import React, { useState } from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabsReactBasic = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <Tab
          label="Tab 1"
          isActive={activeTab === 0}
          onClick={() => handleTabClick(0)}
        />
        <Tab
          label="Tab 2"
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <Tab
          label="Tab 3"
          isActive={activeTab === 2}
          onClick={() => handleTabClick(2)}
        />
      </div>
      <div className="tab-content">
        {activeTab === 0 && <p>Content for Tab 1</p>}
        {activeTab === 1 && <p>Content for Tab 2</p>}
        {activeTab === 2 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default TabsReactBasic;
