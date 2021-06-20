import React, { useState } from "react";
import { addTask, removeAll, deleteTask } from "../redux/actions/todoActions";
import { useDispatch } from "react-redux";

const Main = () => {
  const [inputData, setInputData] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="main-head">TODO list </div>
      <div className="main-body">
        <div className="main-input">
          <input
            type="text"
            className="main-text"
            placeholder="Add a task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            className="main-add-btn"
            onClick={() => dispatch(addTask(inputData))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
