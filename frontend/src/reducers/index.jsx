import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import image from "./image";

export default combineReducers({
  auth,
  message,
  image,
});