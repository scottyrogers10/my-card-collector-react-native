import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./js/reducers";
import rootEpic from "./js/epics";

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                epicMiddleware
            )
        )
    );
    return store;
};