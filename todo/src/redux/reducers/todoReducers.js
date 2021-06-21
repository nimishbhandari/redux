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
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case DELETE_TASK:
      const newList = state.list.filter(
        (elem) => elem.id !== action.payload.id
      );
      return {
        ...state,
        list: newList,
      };

    case REMOVE_ALL:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
