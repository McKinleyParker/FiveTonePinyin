const haveOptionsReducer = (state = false, action) => {
  switch (action.type) {
    case "setHave":
      return action.payload;
    default:
      return state;
  }
};

export default haveOptionsReducer;
