import { LOADING } from "./actionTypes";

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      let { loading } = action.payload;
      return { ...state, loading };
    default:
      return state;
  }
};
