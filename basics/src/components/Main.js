import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../redux/actions/main";

const Main = () => {
  const initValue = useSelector((state) => state.main);

  const dispatch = useDispatch();

  const inc = () => {
    dispatch(incNumber());
  };

  const dec = () => {
    dispatch(decNumber());
  };

  return (
    <div className="main">
      <div className="main-head">Simple Redux Basics</div>
      <div className="main-body">
        <button onClick={dec} className="btn">
          -
        </button>
        <input
          type="text"
          readOnly
          value={initValue}
          className="main-text-input"
        />
        <button onClick={inc} className="btn">
          +
        </button>
      </div>
    </div>
  );
};

export default Main;
