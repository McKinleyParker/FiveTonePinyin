const hanziOptionsReducer = (state = [{ character: "none" }], action) => {
  switch (action.type) {
    case "setHanzi":
      return action.payload;
    default:
      return state;
  }
};

export default hanziOptionsReducer;
