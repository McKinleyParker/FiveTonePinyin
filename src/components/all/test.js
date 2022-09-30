import React, { useState, useRef, useEffect } from "react";
import { pinyinDict } from "../../dictionary/pinyin_dict";
import { toneMap } from "../../dictionary/toneMap";
import { hsk_test_texts as test_texts } from "../../dictionary/test_texts";
import { hskChars } from "../../dictionary/hsk_chars";
import TestProctor from "./testProctor";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/actionCreators/index";

const tone_map = toneMap;
const tone_nums = ["1", "2", "3", "4", "0"];

//input bar
export default function PinyinTest() {
  const [current_test_text, setTest] = useState(1);
  const [testCharacters, setTestCharacters] = useState([]);
  const hsk_test_texts = test_texts;

  //redux hook
  const reduxState = useSelector((reduxState) => reduxState);
  const dispatch = useDispatch();
  const {
    setHanziOptions,
    setHaveOptions,
    setTestProgress,
    setRawPinyin,
    setTestText
  } = bindActionCreators(actionCreators, dispatch);

  const numToTone = (numTone) => {
    return tone_map[numTone];
  };

  //functions for testing
  const set_test_options = () => {
    const blank_options = [];
    for (const key in hsk_test_texts) {
      blank_options.push({ value: key });
    }
    return blank_options;
  };

  const testOptions = set_test_options();

  async function handleTestSelect(event) {
    if (event.target.value) {
      console.log(event.target.value);
      setTest(event.target.value);
      const test_string = hsk_test_texts[event.target.value];
      const fakeVariable = await setTestText(test_string);
      setTestProgress(0);
      //trigger refreshing the view of the test text
      setMoveCursor(true);
    }
  }

  //all displayed text
  const [currentText, setCurrent] = useState("");
  const [completedText, setCompleted] = useState("");
  const [uncompletedText, setUncompleted] = useState("");

  const compareChars = (selectedChar) => {
    for (let charObjectKey in hskChars) {
      const charObject = hskChars[charObjectKey];

      if (selectedChar === charObject.Character) {
        console.log("Found: " + charObject.Character);
        return true;
      }
    }
    return false;
  };

  const checkIfChineseCharacter = async () => {
    const currentSelectedChar = reduxState.testText.substring(
      reduxState.testProgress,
      reduxState.testProgress + 1
    );
    console.log("Checking: " + currentSelectedChar);
    const chineseFound = await compareChars(currentSelectedChar);
    console.log(chineseFound);
    if (chineseFound === false) {
      // first check to see if at the end.
      setTestProgress(reduxState.testProgress + 1);
      setMoveCursor(true);
    }
  };

  const stillGoing = () => {
    if (reduxState.testProgress === 0) {
      setCompleted("");
    } else if (reduxState.testProgress > 0) {
      setCompleted(reduxState.testText.substring(0, reduxState.testProgress));
    }
    console.log("The current: " + reduxState.testText);
    setCurrent(
      reduxState.testText.substring(
        reduxState.testProgress,
        reduxState.testProgress + 1
      )
    );
    setUncompleted(reduxState.testText.substring(reduxState.testProgress + 1));
    setMoveCursor(false);
    checkIfChineseCharacter();
  };

  const testFinished = () => {
    setCompleted(reduxState.testText);
    setCurrent("");
    setUncompleted("");
  };
  // triggers the change in test text to show correct typing
  const [moveCursor, setMoveCursor] = useState(false);
  useEffect(() => {
    const testLength = reduxState.testText.length;
    if (reduxState.testProgress >= testLength) {
      testFinished();
    } else {
      stillGoing();
    }
  }, [moveCursor]);

  //next two vars and useEffect for purpose of returnign focus to input bar after selecting a character
  const inputRef = useRef();
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
      setFocus(false);
    }
  }, [focus]);

  //returns a list of possible characters
  const findChars = async (old_characters, new_character) => {
    const toneStr = numToTone(new_character);
    let count = 0;
    let charChoices = [];
    for (const i in pinyinDict) {
      const char = pinyinDict[i];
      if (count < 5) {
        count += 1;
      }

      if ((old_characters == char.pinyin) & (toneStr == char.tone)) {
        charChoices.push(char);
      }
    }
    if (charChoices.length) {
      charChoices = charChoices.sort((a, b) => {
        return a.freq - b.freq;
      });
      return [true, charChoices];
    }

    return [false, ""];
  };

  // need to update this so it only takes numbers 0-4
  function isNumeric(num) {
    return tone_nums.includes(num);
    // return !isNaN(num);
  }

  const handleTyping = async (input) => {
    if (!reduxState.haveOptions) {
      const inputString = input.target.value;
      const old_characters = (" " + reduxState.rawPinyin).slice(1);
      const new_character = await inputString.substr(inputString.length - 1); //speed tests says this is the one to go with:  https://jsben.ch/BhZiB
      setRawPinyin(inputString); // is there a correc order fot these?

      // see if there are any new characters to type
      // why does everything break if I remove "newHanzi"?
      if (isNumeric(new_character)) {
        const [charWasFound, charChoices] = await findChars(
          old_characters,
          new_character
        );
        if (charWasFound) {
          // setTypedText(reduxState.typedText.concat(newHanzi));
          setHanziOptions(charChoices);
          setHaveOptions(true);
        }
      }
    } else {
      console.log("options active");
      // add extra keyboard shortcuts here
      // setRawPinyin(""); //if there are options available, the input bar shouldn't accept typing
    }
  };

  // clears input bar
  const handleClear = () => {
    setRawPinyin("");
    setHaveOptions(false);
    setHanziOptions([{ character: "none" }]);
  };

  // how can you set listeners for the whole window that "preventDefault on the keyboard but only under certain situations"
  const handleKeyPress = (event) => {
    if (event.keyCode === 8 && reduxState.haveOptions) {
      const old_characters = (" " + reduxState.rawPinyin).slice(1);
      // should try making this delete all characters instead to prevent number spamming
      setRawPinyin(old_characters);
      setHaveOptions(false);
    }
  };

  return (
    <div className="twoTileSection typing-section">
      <div className="inputScroll">
        <h2>Input Bar</h2>
        <p className="instructions">
          Type pinyin & tone # below to search for the most commonly used
          characters. Click the character to select. Ex: "er4" returns "二".
        </p>

        <button className="controlButton" onClick={handleClear}>
          Clear
        </button>
        <input
          className="inputBar"
          ref={inputRef}
          type="text"
          value={reduxState.rawPinyin}
          placeholder="write pinyin + tone number here"
          onChange={handleTyping}
          onKeyDown={handleKeyPress}
        />
        <TestProctor setFocus={setFocus} setMoveCursor={setMoveCursor} />
      </div>

      <div className="typedTextScroll">
        <h3>Test Text</h3>
        <select onChange={handleTestSelect}>
          {testOptions.map((test) => (
            <option key={test.value} value={test.value}>
              {test.value}
            </option>
          ))}
        </select>
        <p>
          <span className="typedTextStyle">{completedText}</span>
          <span className="currentTextStyle">{currentText}</span>
          <span className="untypedTextStyle">{uncompletedText}</span>
        </p>
      </div>
    </div>
  );
}
