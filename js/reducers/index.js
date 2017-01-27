import { combineReducers } from "redux";
import user from "./user/User";
import navigator from "./navigator/Navigator";
import cardImagePath from "./images/CardImagePath";

export default combineReducers({
    user,
    navigator,
    cardImagePath
});