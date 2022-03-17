import {
  SetWord1,
  SetWord2,
  SetWord3,
  SetWord4,
  SetWord5,
  SetAnswer,
  SET_WORD1,
  SET_WORD2,
  SET_WORD3,
  SET_WORD4,
  SET_WORD5,
  SET_ANSWER,
} from "./wordleActionsTypes";

export const setAnswer = (word: string): SetAnswer => ({
  type: SET_ANSWER,
  payload: word,
});

export const setWord1 = (word: string): SetWord1 => ({
  type: SET_WORD1,
  payload: word,
});

export const setWord2 = (word: string): SetWord2 => ({
  type: SET_WORD2,
  payload: word,
});

export const setWord3 = (word: string): SetWord3 => ({
  type: SET_WORD3,
  payload: word,
});

export const setWord4 = (word: string): SetWord4 => ({
  type: SET_WORD4,
  payload: word,
});

export const setWord5 = (word: string): SetWord5 => ({
  type: SET_WORD5,
  payload: word,
});
