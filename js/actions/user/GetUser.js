import * as ActionTypes from "../types";

export default function getUser(userId) {
  return {
    type: ActionTypes.GET_USER,
    payload: {
        userId
    }
  };
};