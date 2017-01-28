import mongoose from "mongoose";
import Card from "../models/Card";
import Busboy from "busboy";
import userController from "./User";

const addCardAsync = request => {
    const busboy = new Busboy({ headers: request.headers });
    const gridfs = request.app.get("gridfs");
    const cardForm = {};
    let cardImage = false;

    return new Promise((resolve, reject) => {
        const createCard = () => {
            if (!cardForm.playerName || !cardForm.year || !cardForm.cardSet || !cardForm.imageId ||
                !cardForm.userId || !cardForm.imageHeight || !cardForm.imageWidth || !cardForm.sport || !cardForm.league) {
                reject({
                    status: 400,
                    message: "Card must have a playerName, year, cardSet, sport, league, userId, imageId, imageHeight and imageWidth."
                });
            } else {
                let card = new Card();
                let cardNumber = cardForm.cardNumber || null;
                let cardSubset = cardForm.cardSubset || null;
                let team = cardForm.team || null;
                let rookie = cardForm.rookie || false;
                let autograph = cardForm.autograph || false;
                let relic = cardForm.relic || false;
                let numberedTo = cardForm.numberedTo || null;

                card.playerName = cardForm.playerName;
                card.year = cardForm.year;
                card.sport = cardForm.sport;
                card.league = cardForm.league;
                card.cardSet = cardForm.cardSet;
                card.userId = cardForm.userId;
                card.imageId = cardForm.imageId;
                card.imageHeight = cardForm.imageHeight;
                card.imageWidth = cardForm.imageWidth;
                card.cardNumber = cardNumber;
                card.cardSubset = cardSubset;
                card.team = team;
                card.rookie = rookie;
                card.autograph = autograph;
                card.relic = relic;
                card.numberedTo = numberedTo;
                card.createdDate = new Date();

                card.save().then(() => {
                    resolve({
                        status: 200,
                        message: "Card was saved successfully",
                        card: card
                    });
                }).catch((error) => {
                    reject({
                        status: 500,
                        message: "Server ERROR while trying to save Card to the database.",
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
                cardForm["imageId"] = file._id;
                createCard();
            });

            writeStream.on("error", function (error) {
                //TODO: Handle Error
                console.log(error);
            });

            cardImage = true;
            file.pipe(writeStream);
        });

        busboy.on("field", (fieldName, value, fieldNameTruncated, valueTruncated, encoding, mimeType) => {
            cardForm[fieldName] = value;
        });

        busboy.on("finish", () => {
            if (!cardImage) {
                createCard();
            }
        });

        request.pipe(busboy);
    });
};

const getCardFeedBatchAsync = request => {
    return new Promise((resolve, reject) => {
        Card.find({}).limit(40).sort({createdDate: -1}).exec().then(cards => {
            let usersAsync = cards.map(card => {
                return userController.getUserByIdAsync({ query: { id: card.userId } });
            });

            Promise.all(usersAsync).then(results => {
                let modifiedCards = cards.map((card, index) => {
                    return {
                        cardInfo: card,
                        userInfo: {
                            username: results[index].user.username,
                            profileImageId: results[index].user.profileImageId
                        }
                    };
                });

                resolve({
                    status: 200,
                    message: "Cards Found!",
                    cards: modifiedCards
                });
            }).catch(error => {
                reject({
                    status: 400,
                    message: "Could not find users associated with cards.",
                    error
                });
            });
        }).catch(error => {
            reject({
                status: 400,
                message: "Could not find Cards for feed.",
                error
            });
        });
    });
};

const getCardByIdAsync = request => {
    return new Promise((resolve, reject) => {
        const cardId = request.query.id;
        Card.findOne({ _id: cardId }).exec().then(card => {
            resolve({
                status: 200,
                message: "Card Found!",
                card
            });
        }).catch(error => {
            reject({
                status: 400,
                message: "Could not find a Card with that id.",
                error: error
            });
        })

    });
};

const getCardImageByIdAsync = (request, response) => {
    const gridfs = request.app.get("gridfs");

    return new Promise((resolve, reject) => {
        if (!request.query.id) {
            reject({
                status: 400,
                message: "Please provide the id to look up the Card image with."
            });
        } else {
            const imageId = request.query.id;

            //TODO: Promisify this callback.
            gridfs.findOne({ _id: imageId }, (error, file) => {
                if (!error && file) {
                    response.writeHead(200, { "Content-Type": file.contentType });

                    const readstream = gridfs.createReadStream({
                        _id: imageId
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
                        message: "Could not find a Card image with that id.",
                        error: error
                    });
                }
            });
        }
    });
};

export default {
    addCardAsync,
    getCardByIdAsync,
    getCardImageByIdAsync,
    getCardFeedBatchAsync
};