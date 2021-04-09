import { combineReducers } from "redux";


const userReducer = (state = null, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    user: userReducer
});