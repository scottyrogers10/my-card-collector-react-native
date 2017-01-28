import * as ActionTypes from "../../actions/types";
import { receivedCardFeedBatch } from "../../actions";
import { ipAddress } from "../../EnvironmentVariables";

export default function getCardFeedBatch(action$) {
  return action$.ofType(ActionTypes.GET_CARD_FEED_BATCH)
    .mergeMap(() => fetch(`${ipAddress}/api/cards`)
      .then(result => {
        return result.json();
      }).then(data => {
        return data.cards
      }))
    .map(cards => receivedCardFeedBatch(cards));
};