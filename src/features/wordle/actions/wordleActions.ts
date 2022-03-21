import * as types from "./wordleActionsTypes";

export const setAnswer = (word: string): types.SetAnswer => ({
  type: types.SET_ANSWER,
  payload: word,
});

export const setWord = (word: string): types.SetWord => ({
  type: types.SET_WORD,
  payload: word,
});

export const addCorrectLetter = (letter: string): types.AddCorrectLetter => ({
  type: types.ADD_CORRECT_LETTER,
  payload: letter,
});

export const addAlmostLetter = (letter: string): types.AddAlmostLetter => ({
  type: types.ADD_ALMOST_LETTER,
  payload: letter,
});

export const addWrongLetter = (letter: string): types.AddWrongLetter => ({
  type: types.ADD_WRONG_LETTER,
  payload: letter,
});

export const setWordIndex = (index: number): types.SetWordIndex => ({
  type: types.SET_WORD_INDEX,
  payload: index,
});

export const setHasWon = (hasWon: boolean): types.SetHasWon => ({
  type: types.SET_HAS_WON,
  payload: hasWon,
});

export const setNumberOfTries = (
  numberOfTries: number,
): types.SetNumberOfTries => ({
  type: types.SET_NUMBER_OF_TRIES,
  payload: numberOfTries,
});

export const resetAttempt = (): types.ResetAttempt => ({
  type: types.RESET_ATTEMPT,
});
