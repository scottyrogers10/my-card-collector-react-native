import express from "express";
import mongoConfig from "./Mongo";
import routerConfig from "./Router";
import developmentConfig from "./environment/Development";
import productionConfig from "./environment/Production";

const app = express();

const environments = {
    development: developmentConfig,
    production: productionConfig
};

export const init = (env) => {
    if (environments[env]) {
        app.set("environment", environments[env]);
    } else {
        throw new Error("The mode (" + env + ") is not supported.");
    }

    mongoConfig.init(app);
    routerConfig.init(app);
};

export const start = () => app.listen(3005, () => console.log("Server is running on port 3005"));
