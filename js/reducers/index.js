import { combineReducers } from "redux";
import user from "./user/User";
import navigator from "./navigator/Navigator";
import uploadedImage from "./images/UploadedImage";

export default combineReducers({
    user,
    navigator,
    uploadedImage
});