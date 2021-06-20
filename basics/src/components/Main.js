import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="main-head">Simple Redux Basics</div>
      <div className="main-body">
        <button className="btn">-</button>
        <input type="text" value="0" className="main-text-input" />
        <button className="btn">+</button>
      </div>
    </div>
  );
};

export default Main;
