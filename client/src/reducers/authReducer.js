export default (state = null, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "FETCH_USER":
      return action.payload;
    default:
      return state;
  }
};
