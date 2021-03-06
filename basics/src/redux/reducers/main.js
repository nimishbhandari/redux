import { INCREMENT, DECREMENT } from "../actions/types";

const initialState = 0;

const main = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default main;
