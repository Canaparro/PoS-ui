import { combineReducers } from "redux";
import store from "./store/index.js";
import loading from "./loading/index.js";

export default combineReducers({ store, loading });
