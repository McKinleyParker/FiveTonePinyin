import { combineReducers } from "redux";
import hanziOptionsReducer from "./hanziOptionsReducer";
import haveOptionsReducer from "./haveOptionsReducer";
import rawPinyinReducer from "./rawPinyinReducer";
import typedTextReducer from "./typedTextReducer";
import testProgressReducer from "./testProgressReducer";
import testTextReducer from "./testTextReducer";

// combine all the reducers
// name all the states used in redux
const reducers = combineReducers({
  hanziOptions: hanziOptionsReducer,
  haveOptions: haveOptionsReducer,
  typedText: typedTextReducer,
  rawPinyin: rawPinyinReducer,
  testProgress: testProgressReducer,
  testText: testTextReducer
});

export default reducers;
