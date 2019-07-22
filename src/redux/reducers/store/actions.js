import { CREATE_STORE } from "./actionTypes";
import { loading } from "../loading/action";
import Axios from "axios";

export function createStore(name) {
  return async function(dispatch) {
    dispatch(loading(true));
    const response = await Axios.post("/store", { name: name });
    dispatch({
      type: CREATE_STORE,
      payload: { name: response.data.name }
    });
    dispatch(loading(false));
  };
}
