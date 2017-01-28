import { combineReducers } from "redux";
import user from "./user/User";
import navigator from "./navigator/Navigator";
import cards from "./cards/Cards";
import cardImagePath from "./images/CardImagePath";

export default combineReducers({
    user,
    navigator,
    cards,
    cardImagePath
});