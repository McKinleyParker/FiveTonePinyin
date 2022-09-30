import React, { useState, useRef, useEffect } from "react";
import { pinyinDict } from "../../dictionary/pinyin_dict";
import { toneMap } from "../../dictionary/toneMap";
import PinyinSelect from "./autoComplete";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/actionCreators/index";

const tone_map = toneMap;
const tone_nums = ["1", "2", "3", "4", "0"];

//input bar
export default function Pinyin() {
  //redux hook
  const reduxState = useSelector((reduxState) => reduxState);
  const dispatch = useDispatch();
  const {
    setHanziOptions,
    setHaveOptions,
    setTypedText,
    setRawPinyin
  } = bindActionCreators(actionCreators, dispatch);

  const numToTone = (numTone) => {
    return tone_map[numTone];
  };

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
      console.log("The old: " + old_characters);
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
    console.log("clear is being handled");
    setRawPinyin("");
    setTypedText("");
    setHaveOptions(false);
    setHanziOptions([{ character: "none" }]);
  };

  // how can you set listeners for the whole window that "preventDefault on the keyboard but only under certain situations"
  const handleKeyPress = (event) => {
    console.log("an attempt was made");
    console.log(event.keyCode);
    if (event.keyCode === 8 && reduxState.haveOptions) {
      console.log("deleted it");
      const old_characters = (" " + reduxState.rawPinyin).slice(1);
      console.log("old characters: " + old_characters);
      // should try making this delete all characters instead to prevent number spamming
      setRawPinyin(old_characters);
      setHaveOptions(false);
    }
  };

  return (
    <div className="twoTileSection typing-section">
      <tile className="inputScroll">
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
        <PinyinSelect setFocus={setFocus} />
      </tile>

      <tile key={reduxState.typedText} className="typedTextScroll white-pulse">
        <h3>Typed Text</h3>
        <p>{reduxState.typedText}</p>
      </tile>
    </div>
  );
}
