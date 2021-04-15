export default (state = { usernameError: "" }, action) => {
  switch (action.type) {
    case "ADD_USERNAME_ERROR":
      return { ...state, usernameError: action.payload };
    default:
      return state;
  }
};
