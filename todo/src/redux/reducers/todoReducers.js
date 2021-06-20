import { ADD_TASK, DELETE_TASK, REMOVE_ALL } from "../actions/types";

const initialState = {
  list: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { id, data } = action.payload;
      return {
        ...state,
        data: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    default:
      return state;
  }
};
