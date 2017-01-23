import * as ActionTypes from "../types";

export default function pushScreen(screen) {
  return {
    type: ActionTypes.PUSH_SCREEN,
    payload: {
      screen
    }
  };
};