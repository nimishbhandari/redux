import { ADD_TASK, DELETE_TASK, REMOVE_ALL } from "./types";

export const addTask = (data) => {
  return {
    type: ADD_TASK,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTask = () => {
  return {
    type: DELETE_TASK,
  };
};

export const removeAll = () => {
  return {
    type: REMOVE_ALL,
  };
};
