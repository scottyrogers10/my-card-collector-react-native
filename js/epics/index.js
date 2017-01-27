import { combineEpics } from "redux-observable";
import getUserById from "./user/GetUserById";

export default combineEpics(
    getUserById
);