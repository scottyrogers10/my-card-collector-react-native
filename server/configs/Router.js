import express from "express";
import usersRouter from "../routes/Users";

const init = (app) => {
    app.use((request, response, next) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
        response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        next();
    });

    app.use("/api/users", usersRouter);
};

export default { init };