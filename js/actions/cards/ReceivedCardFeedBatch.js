import * as ActionTypes from "../types";

export default function receivedCardFeedBatch(cards) {
  return {
    type: ActionTypes.RECEIVED_CARD_FEED_BATCH,
    payload: {
        cards
    }
  };
};