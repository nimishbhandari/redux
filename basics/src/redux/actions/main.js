import { INCREMENT, DECREMENT } from "./types";

export const incNumber = () => {
  return {
    type: INCREMENT,
  };
};

export const decNumber = () => {
  return {
    type: DECREMENT,
  };
};
