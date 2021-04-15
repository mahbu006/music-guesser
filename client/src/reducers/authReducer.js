export default (state = null, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "FETCH_USER":
      return state;
    case "ADD_USERNAME":
      return state;
    case "SIGN_OUT":
      return null;
    default:
      return state;
  }
};
