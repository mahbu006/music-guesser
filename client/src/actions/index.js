import server from "../api/server";

export const fetchUser = () => {
    return async dispatch => {
        const response = await server.get('/user');
        dispatch({ type: "FETCH_USER", payload: response._id})
    }
}