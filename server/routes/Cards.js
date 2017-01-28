import express from "express";
import cardController from "../controllers/Card";

const cardRouter = express.Router();

cardRouter.post("/", (request, response) => {
    cardController.addCardAsync(request).then(result => {
        response.status(result.status).json({
            message: result.message,
            card: result.card
        });
    }).catch(error => {
        response.status(error.status).json({
            message: error.message
        });
    });
});

cardRouter.get("/", (request, response) => {
    if (request.query.id) {
        cardController.getCardByIdAsync(request).then(result => {
            response.status(result.status).json({
                message: result.message,
                card: result.card
            });
        }).catch(error => {
            response.status(error.status).json({
                message: error.message
            });
        });
    } else {
        cardController.getCardFeedBatchAsync(request).then(result => {
            response.status(result.status).json({
                message: result.message,
                cards: result.cards
            });
        }).catch(error => {
            response.status(error.status).json({
                message: error.message
            });
        });
    }
});

cardRouter.get("/images", (request, response) => {
    cardController.getCardImageByIdAsync(request, response).then(() => {
        response.end();
    }).catch(error => {
        response.status(error.status).json({
            message: error.message
        });
    });
});

export default cardRouter;