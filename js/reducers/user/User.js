import * as ActionTypes from "../../actions/types";

export default function user(state = {}, action) {
  if (action.type === ActionTypes.RECEIVED_USER) {
    return action.payload.user;
  } else {
    return state;
  }
};