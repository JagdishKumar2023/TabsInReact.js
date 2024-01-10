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

export const PractiesTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleReactBasic = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab">
      <div className="tab-button">
        <Tab
          label="Tab-0"
          onClick={() => handleReactBasic(0)}
          isActive={activeTab === 0}
        />
        <Tab
          label="Tab-1"
          onClick={() => handleReactBasic(1)}
          isActive={activeTab === 1}
        />
        <Tab
          label="Tab-2"
          onClick={() => handleReactBasic(2)}
          isActive={activeTab === 2}
        />
      </div>
      <div className="tab-content">
        {activeTab === 0 && <p>Content for tab 0</p>}
        {activeTab === 1 && <p>Content for tab 1</p>}
        {activeTab === 2 && <p>Content for tab 2</p>}
      </div>
    </div>
  );
};
