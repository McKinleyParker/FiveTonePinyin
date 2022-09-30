const rawPinyinReducer = (state = "", action) => {
  switch (action.type) {
    case "setRawPinyin":
      return action.payload;
    default:
      return state;
  }
};

export default rawPinyinReducer;
