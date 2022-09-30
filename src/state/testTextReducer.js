const testTextReducer = (state = "请选吧", action) => {
  switch (action.type) {
    case "setTestText":
      return action.payload;
    default:
      return state;
  }
};

export default testTextReducer;
