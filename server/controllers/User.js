import mongoose from "mongoose";
import User from "../models/User";
import Busboy from "busboy";

const addUserAsync = request => {
    const busboy = new Busboy({ headers: request.headers });
    const gridfs = request.app.get("gridfs");
    const userForm = {};
    let profileImage = false;

    return new Promise((resolve, reject) => {
        const createUser = () => {
            if (!userForm.email || !userForm.username) {
                reject({
                    status: 400,
                    message: "User must have a username and email."
                });
            } else {
                let user = new User();
                let password = null;
                let salt = null;
                let firstName = userForm.firstName || null;
                let lastName = userForm.lastName || null;
                let profileImageId = userForm.profileImageId || null;

                user.username = userForm.username;
                user.email = userForm.email;
                user.password = password;
                user.salt = salt;
                user.firstName = firstName;
                user.lastName = lastName;
                user.profileImageId = profileImageId;
                user.createdDate = new Date();
                user.lastSignInDate = new Date();

                user.save().then(() => {
                    resolve({
                        status: 200,
                        message: "User was saved successfully",
                        user: user
                    });
                }).catch((error) => {
                    reject({
                        status: 500,
                        message: "Server ERROR while trying to save User to the database.",
                        error: error
                    });
                });
            }
        };

        busboy.on("file", (fieldName, file, fileName, encoding, mimeType) => {
            const writeStream = gridfs.createWriteStream({
                filename: fileName,
                content_type: mimeType
            });

            writeStream.on("close", (file) => {
                userForm["profileImageId"] = file._id;
                createUser();
            });

            writeStream.on("error", function (error) {
                //TODO: Handle Error
                console.log(error);
            });

            profileImage = true;
            file.pipe(writeStream);
        });

        busboy.on("field", (fieldName, value, fieldNameTruncated, valueTruncated, encoding, mimeType) => {
            userForm[fieldName] = value;
        });

        busboy.on("finish", () => {
            if (!profileImage) {
                createUser();
            }
        });

        request.pipe(busboy);
    });
};

const getUserByIdAsync = request => {
    return new Promise((resolve, reject) => {
        if (!request.query.id) {
            reject({
                status: 400,
                message: "Please provide the id to look up the user with."
            });
        } else {
            const userId = request.query.id;
            User.findOne({ _id: userId }).exec().then(user => {
                resolve({
                    status: 200,
                    message: "User Found!",
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        profileImageId: user.profileImageId,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                });
            }).catch(error => {
                reject({
                    status: 400,
                    message: "Could not find a user with that id.",
                    error: error
                });
            })
        }
    });
};

const editUserByIdAsync = request => {
    return new Promise((resolve, reject) => {
        if (!request.query.id) {
            reject({
                status: 400,
                message: "Please provide the id to look up the person with."
            });
        } else {
            const userId = request.query.id;
            User.findOneAndUpdate({ _id: userId }, request.body).exec().then(user => {
                resolve({
                    status: 200,
                    message: "User updated successfully!",
                    user: user
                });
            }).catch(error => {
                reject({
                    status: 400,
                    message: "Could not find a User with that id.",
                    error: error
                });
            });
        }
    });
};

const getUserProfileImageByIdAsync = (request, response) => {
    const gridfs = request.app.get("gridfs");

    return new Promise((resolve, reject) => {
        if (!request.query.id) {
            reject({
                status: 400,
                message: "Please provide the id to look up the user profile image with."
            });
        } else {
            const profileImageId = request.query.id;

            //TODO: Promisify this callback.
            gridfs.findOne({ _id: profileImageId }, (error, file) => {
                if (!error && file) {
                    response.writeHead(200, { "Content-Type": file.contentType });

                    const readstream = gridfs.createReadStream({
                        _id: profileImageId
                    });

                    readstream.on("data", data => {
                        response.write(data);
                    });

                    readstream.on("end", () => {
                        resolve();
                    });

                    readstream.on("error", error => {
                        //TODO: Handle Error
                        console.log(error);
                    });
                } else {
                    reject({
                        status: 400,
                        message: "Could not find a user profile image with that id.",
                        error: error
                    });
                }
            });
        }
    });
};

export default {
    addUserAsync,
    getUserByIdAsync,
    editUserByIdAsync,
    getUserProfileImageByIdAsync
};