import * as ActionTypes from "../../actions/types";
import { receivedUserById } from "../../actions";
import { ipAddress } from "../../EnvironmentVariables";

export default function getUserById(action$) {
  return action$.ofType(ActionTypes.GET_USER_BY_ID)
    .map(action => action.payload.userId)
    .mergeMap(userId => fetch(`${ipAddress}/api/users?id=${userId}`)
      .then(result => {
        return result.json();
      }).then(data => {
        return data.user
      }))
    .map(user => receivedUserById(user));
};