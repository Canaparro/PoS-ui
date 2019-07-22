import { CREATE_STORE } from "./actionTypes";

const initialState = {
  name: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_STORE:
      const { name } = action.payload;
      return {
        ...state,
        name
      };
    default:
      return state;
  }
}
