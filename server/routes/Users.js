import express from "express";
import userController from "../controllers/User";

const userRouter = express.Router();

userRouter.post("/", (request, response) => {
    userController.addUserAsync(request).then(result => {
        response.status(result.status).json({
            message: result.message,
            user: result.user
        });
    }).catch(error => {
        response.status(error.status).json({
            message: error.message
        });
    });
});

userRouter.get("/", (request, response) => {
    userController.getUserByIdAsync(request).then(result => {
        response.status(result.status).json({
            message: result.message,
            user: result.user
        });
    }).catch(error => {
        response.status(error.status).json({
            message: error.message
        });
    });
});

userRouter.patch("/", (request, response) => {
    userController.editUserByIdAsync(request).then(result => {
        response.status(result.status).json({
            message: result.message,
            user: result.user
        });
    }).catch(error => {
        response.status(error.status).json({
            message: error.message
        });
    });
});

userRouter.get("/profileImages", (request, response) => {
    userController.getUserProfileImageByIdAsync(request, response).then(() => {
        response.end();
    }).catch(error => {
        response.status(error.status).json({
            message: error.message
        });
    });
});

export default userRouter;