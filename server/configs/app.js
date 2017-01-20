import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import bodyParser from "body-parser";
import path from "path";

const app = express();

export const init = () => console.log("App Init");
export const start = () => app.listen(3000, () => console.log("Server is running on port 3000"));
