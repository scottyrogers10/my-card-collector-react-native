import mongoose from "mongoose";

const Schema = mongoose.Schema;

let cardSchema = new Schema({
    playerName: String,
    cardNumber: String,
    cardSet: String,
    cardSubset: String,
    year: String,
    team: String,
    sport: String,
    league: String,
    rookie: Boolean,
    autograph: Boolean,
    relic: Boolean,
    numberedTo: Number,
    userId: String,
    imageId: String,
    imageHeight: Number,
    imageWidth: Number,
    createdDate: Date
});

let Card = mongoose.model("Card", cardSchema);

export default Card;