import * as ActionTypes from "../types";

export default function receivedUserById(user) {
  return {
    type: ActionTypes.RECEIVED_USER_BY_ID,
    payload: {
        user
    }
  };
};