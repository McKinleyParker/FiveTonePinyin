const typedTextReducer = (state = "", action) => {
  switch (action.type) {
    case "setText":
      return action.payload;
    default:
      return state;
  }
};

export default typedTextReducer;
