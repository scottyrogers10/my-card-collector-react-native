import * as ActionTypes from "../types";

export default function getUserById(userId) {
  return {
    type: ActionTypes.GET_USER_BY_ID,
    payload: {
        userId
    }
  };
};