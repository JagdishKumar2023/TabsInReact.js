import React from "react";

export const ReactTabBasic = () => {
  return (
    <div>
      <div className="container">
        <button className="tabs active-tabs">Education</button>
        <button className="tabs active-tabs">Experience</button>
        <button className="tabs active-tabs">Skill</button>
      </div>
      <div className="content-tab">
        <div className="content active-content">
          <h2>Education</h2>
          <hr />
          <p>
            <li>Computer science</li>
          </p>
          <p>
            <li>high school</li>
          </p>
          <p>
            <li>School</li>
          </p>
        </div>
      </div>
    </div>
  );
};
