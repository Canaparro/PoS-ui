import { LOGIN, LOGOUT } from "./actionTypes";
import { loading } from "../loading/action";
import Axios from "axios";

// dispatch(loading(true));
export function login(username, password) {
  return async function(dispatch) {
    let bodyFormData = new FormData();
    bodyFormData.set("username", username);
    bodyFormData.set("password", password);
    const response = await Axios.post("/login", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  };
}
// const response2 = await Axios.get("/store");
// dispatch({
//   type: LOGIN,
//   payload: true
// });
// dispatch(loading(false));
export const logout = () => {
  return {
    type: LOGOUT,
    payload: {}
  };
};
