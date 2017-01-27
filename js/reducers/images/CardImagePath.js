import * as ActionTypes from "../../actions/types";

export default function cardImagePath(state = null, action) {
  if (action.type === ActionTypes.GET_CARD_IMAGE_PATH) {
    return action.payload.imagePath;
  } else {
    return state;
  }
};