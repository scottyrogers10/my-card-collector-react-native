import * as ActionTypes from "../../actions/types";

export default function uploadedImage(state = "", action) {
  if (action.type === ActionTypes.UPLOAD_IMAGE) {
    return action.payload.imageData;
  } else {
    return state;
  }
};