import {
  AddAlmostLetter,
  AddCorrectLetter,
  AddWrongLetter,
  ADD_ALMOST_LETTER,
  ADD_CORRECT_LETTER,
  ADD_WRONG_LETTER,
  SetAnswer,
  SetWord,
  SetWordIndex,
  SET_ANSWER,
  SET_WORD,
  SET_WORD_INDEX,
} from "./wordleActionsTypes";

export const setAnswer = (word: string): SetAnswer => ({
  type: SET_ANSWER,
  payload: word,
});

export const setWord = (word: string): SetWord => ({
  type: SET_WORD,
  payload: word,
});

export const addCorrectLetter = (letter: string): AddCorrectLetter => ({
  type: ADD_CORRECT_LETTER,
  payload: letter,
});

export const addAlmostLetter = (letter: string): AddAlmostLetter => ({
  type: ADD_ALMOST_LETTER,
  payload: letter,
});

export const addWrongLetter = (letter: string): AddWrongLetter => ({
  type: ADD_WRONG_LETTER,
  payload: letter,
});

export const setWordIndex = (index: number): SetWordIndex => ({
  type: SET_WORD_INDEX,
  payload: index,
});
