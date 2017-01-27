import * as ActionTypes from "../types";

export default function getCardImagePath(imagePath) {
  return {
    type: ActionTypes.GET_CARD_IMAGE_PATH,
    payload: {
        imagePath
    }
  };
};