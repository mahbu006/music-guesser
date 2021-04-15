import server from "../api/server";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
export const tryLocalSignin = () => async dispatch => {
  try {
    const user = await AsyncStorage.getItem("userId");
    if (user) {
      dispatch({ type: "SIGN_IN", payload: user });
      navigate("mainFlow");
    } else navigate("authFlow");
  } catch (err) {
    console.log(err);
  }
};
export const setUser = id => async dispatch => {
  try {
    await AsyncStorage.setItem("userId", id);
    dispatch({ type: "SIGN_IN", payload: id });
    navigate("mainFlow");
  } catch (err) {}
};

export const fetchUser = () => {
  return async dispatch => {
    const response = await server.get("/user");
    dispatch({ type: "FETCH_USER", payload: response });
  };
};
