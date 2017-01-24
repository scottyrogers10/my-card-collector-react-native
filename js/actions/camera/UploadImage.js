import * as ActionTypes from "../types";

export default function getUser(imageData) {
  return {
    type: ActionTypes.UPLOAD_IMAGE,
    payload: {
        imageData
    }
  };
};