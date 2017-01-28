import { combineEpics } from "redux-observable";
import getUserById from "./user/GetUserById";
import getCardFeedBatch from "./cards/GetCardFeedBatch";

export default combineEpics(
    getUserById,
    getCardFeedBatch
);