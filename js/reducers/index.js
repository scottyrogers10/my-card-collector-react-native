import { combineReducers } from "redux";
import user from "./user/User";
import navigator from "./navigator/Navigator";

export default combineReducers({
    user,
    navigator
});