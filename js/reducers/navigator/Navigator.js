import * as ActionTypes from "../../actions/types";
import * as NavigationStateUtils from "NavigationStateUtils";

const initialState = {
    index: 0,
    routes: [
        { key: "home" }
    ]
};

export default function user(state = initialState, action) {
    if (action.type === ActionTypes.PUSH_SCREEN) {
        if (state.routes[state.index].key === (action.payload.screen.key)) return state;
        return NavigationStateUtils.push(state, action.payload.screen);
    } else if (action.type === ActionTypes.POP_SCREEN) {
        if (state.index === 0 || state.routes.length === 1) return state;
        return NavigationStateUtils.pop(state);
    } else {
        return state;
    }
};