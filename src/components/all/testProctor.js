import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/actionCreators/index";

const TestProctor = (props) => {
  // Redux Stuff
  const reduxState = useSelector((reduxState) => reduxState);
  const dispatch = useDispatch();
  const {
    setHaveOptions,
    setTypedText,
    setRawPinyin,
    setTestProgress
  } = bindActionCreators(actionCreators, dispatch);

  const checkAnswer = (testAnswer) => {
    const correctAnswer = reduxState.testText.substring(
      reduxState.testProgress,
      reduxState.testProgress + 1
    );
    console.log("at least we are checking");
    if (testAnswer === correctAnswer) {
      console.log("it was correct");
      return true;
    } else {
      return false;
    }
  };

  async function handleCorrectAnswer() {
    const fakeVariable = await setTestProgress(reduxState.testProgress + 1);
    setHaveOptions(false);
    setRawPinyin("");
    props.setFocus(true);
    props.setMoveCursor(true);
  }

  const handleClickOne = (event) => {
    let test_answer = (
      " " + reduxState.hanziOptions[event.target.id].character
    ).slice(1);

    // check if the answer is correct
    if (checkAnswer(test_answer)) {
      handleCorrectAnswer();
    }
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

export default TestProctor;
