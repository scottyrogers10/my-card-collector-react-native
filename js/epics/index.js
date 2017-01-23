import { combineEpics } from "redux-observable";
import getUser from "./user/GetUser";

export default combineEpics(
    getUser
);