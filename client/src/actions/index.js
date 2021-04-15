import server from "../api/server";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
export const tryLocalSignin = () => async dispatch => {
  try {
    const id = await AsyncStorage.getItem("userId");
    if (id) {
      dispatch({ type: "SIGN_IN", payload: id });
      const user = await server.get("/user");
      if (user.data.username === undefined) navigate("ChooseUsername");
      else navigate("mainFlow");
    } else navigate("Authentication");
  } catch (err) {
    console.log(err);
  }
};

export const setUser = id => async dispatch => {
  try {
    await AsyncStorage.setItem("userId", id);
    dispatch({ type: "SIGN_IN", payload: id });
    const user = await server.get("/user");
    if (user.data.username === undefined) navigate("ChooseUsername");
    else navigate("mainFlow");
  } catch (err) {}
};

export const setUserName = name => async dispatch => {
  try {
    const response = await server.post("/user/username/update", {
      username: name
    });
    dispatch({ type: "ADD_USERNAME", payload: name });
    navigate("mainFlow");
  } catch (err) {
    /* console.log(err); */
    dispatch({
      type: "ADD_USERNAME_ERROR",
      payload: "This username already exists."
    });
  }
};

export const fetchUser = () => {
  return async dispatch => {
    const response = await server.get("/user");
    dispatch({ type: "FETCH_USER", payload: response });
  };
};
