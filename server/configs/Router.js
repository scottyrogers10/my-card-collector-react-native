import express from "express";
import usersRouter from "../routes/Users";
import cardsRouter from "../routes/Cards";

const init = (app) => {
    app.use((request, response, next) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
        response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        next();
    });

    app.use("/api/users", usersRouter);
    app.use("/api/cards", cardsRouter);
};

export default { init };