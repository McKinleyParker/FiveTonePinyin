const testProgressReducer = (state = 0, action) => {
  switch (action.type) {
    case "setTestProgress":
      return action.payload;
    default:
      return state;
  }
};

export default testProgressReducer;
