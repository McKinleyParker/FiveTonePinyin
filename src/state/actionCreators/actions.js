// set with a full list of objects each time
export const setHanziOptions = (hanziOptions) => {
  return (dispatch) => {
    dispatch({
      type: "setHanzi",
      payload: hanziOptions
    });
  };
};

//should only be used to set true or false
export const setHaveOptions = (haveChoices) => {
  return (dispatch) => {
    dispatch({
      type: "setHave",
      payload: haveChoices
    });
  };
};

export const setTypedText = (text) => {
  return (dispatch) => {
    dispatch({
      type: "setText",
      payload: text
    });
  };
};

export const setRawPinyin = (rawPinyin) => {
  return (dispatch) => {
    dispatch({
      type: "setRawPinyin",
      payload: rawPinyin
    });
  };
};

export const setTestProgress = (testProgress) => {
  return (dispatch) => {
    dispatch({
      type: "setTestProgress",
      payload: testProgress
    });
  };
};

export const setTestText = (testText) => {
  return (dispatch) => {
    dispatch({
      type: "setTestText",
      payload: testText
    });
  };
};
