import * as ActionTypes from "../../actions/types";

export default function cards(state = [], action) {
    if (action.type === ActionTypes.RECEIVED_CARD_FEED_BATCH) {
        return action.payload.cards;
    } else {
        return state;
    }
};