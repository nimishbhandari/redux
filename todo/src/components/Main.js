import React, { useState } from "react";
import { addTask, removeAll, deleteTask } from "../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const [inputData, setInputData] = useState("");

  const list = useSelector((state) => state.todoReducers.list);

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
            onClick={() => dispatch(addTask(inputData), setInputData(""))}
          >
            +
          </button>
        </div>

        {list.map((elem) => {
          return (
            <div className="main-display" key={elem.id}>
              <div className="main-display-text">{elem.data}</div>
              <button
                className="main-display-btn"
                onClick={() => dispatch(deleteTask(elem.id))}
              >
                x
              </button>
            </div>
          );
        })}

        <center>
          <button
            onClick={() => {
              dispatch(removeAll());
            }}
            className="remove"
          >
            remove
          </button>
        </center>
      </div>
    </div>
  );
};

export default Main;
