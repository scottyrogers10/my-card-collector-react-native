import mongoose from "mongoose";

const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    salt: String,
    firstName: String,
    lastName: String,
    profileImageId: String,
    createdDate: Date,
    lastSignInDate: Date
});

let User = mongoose.model("User", userSchema);

export default User;