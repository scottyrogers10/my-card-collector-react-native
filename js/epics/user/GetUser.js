import * as ActionTypes from "../../actions/types";
import { receivedUser } from "../../actions";
import { users } from "../../MockApi";

export default function getUser(action$) {
  return action$.ofType(ActionTypes.GET_USER)
    .map(action => action.payload.userId)
    .map(userId => {
      return users.find(user => user.id === userId)
    })
    .map(user => receivedUser(user))
};