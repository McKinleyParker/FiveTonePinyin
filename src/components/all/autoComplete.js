import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/actionCreators/index";

const PinyinSelect = (props) => {
  // Redux Stuff
  const reduxState = useSelector((reduxState) => reduxState);
  const dispatch = useDispatch();
  const { setHaveOptions, setTypedText, setRawPinyin } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClickOne = (event) => {
    console.log(
      "selected the hanzi: " +
        reduxState.hanziOptions[event.target.id].character
    );
    let oldstr = (" " + reduxState.typedText).slice(1);
    let newstr = (
      " " + reduxState.hanziOptions[event.target.id].character
    ).slice(1);
    setTypedText(oldstr + newstr);
    setHaveOptions(false);
    setRawPinyin("");
    props.setFocus(true);
  };

  return reduxState.haveOptions ? (
    <div className="optionWrapper">
      {reduxState.hanziOptions.map((option, index) => (
        <button
          className="optionButton"
          id={index}
          key={index}
          onClick={handleClickOne}
        >
          {option.character}
        </button>
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default PinyinSelect;
