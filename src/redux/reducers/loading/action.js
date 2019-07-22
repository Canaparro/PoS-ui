import { LOADING } from "./actionTypes";

export const loading = loading => {
  return {
    type: LOADING,
    payload: { loading }
  };
};
