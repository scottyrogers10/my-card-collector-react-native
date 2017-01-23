import * as ActionTypes from "../types";

export default function receivedUser(user) {
  return {
    type: ActionTypes.RECEIVED_USER,
    payload: {
        user
    }
  };
};