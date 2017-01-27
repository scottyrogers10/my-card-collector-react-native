import mongoose from "mongoose";
import Grid from "gridfs-stream";

mongoose.Promise = global.Promise;

const init = app => {
    const environment = app.get("environment");
    const uri = "mongodb://" + environment.database.username + ":" + environment.database.password + "@" + environment.database.uri;
    const connection = mongoose.createConnection(uri);
    const gridFileSchema = new mongoose.Schema({}, { strict: false });

    connection.once("open", () => {
        const gfs = Grid(connection.db, mongoose.mongo);
        app.set("gridfs", gfs);
    });

    mongoose.connect(uri);
    app.set("GridFile", mongoose.model("GridFile", gridFileSchema, "fs.files"));

    //Note: Console Logs for Development
    mongoose.connection.on("connected", () => console.log("Mongoose connected."));

    //Note: Console Logs for Development
    mongoose.connection.on("error", error => console.log("Mongoose connection error: " + error));

    //Note: Console Logs for Development
    mongoose.connection.on("disconnected", () => console.log("Mongoose disconnected."));
};

export default { init };