export const SET_WORD = "SET_WORD";
export const ADD_CORRECT_LETTER = "ADD_CORRECT_LETTER";
export const ADD_ALMOST_LETTER = "ADD_ALMOST_LETTER";
export const ADD_WRONG_LETTER = "ADD_WRONG_LETTER";
export const SET_ANSWER = "SET_ANSWER";
export const SET_WORD_INDEX = "SET_WORD_INDEX";

export interface SetAnswer {
  type: typeof SET_ANSWER;
  payload: string;
}

export interface SetWord {
  type: typeof SET_WORD;
  payload: string;
}

export interface AddCorrectLetter {
  type: typeof ADD_CORRECT_LETTER;
  payload: string;
}

export interface AddAlmostLetter {
  type: typeof ADD_ALMOST_LETTER;
  payload: string;
}

export interface AddWrongLetter {
  type: typeof ADD_WRONG_LETTER;
  payload: string;
}

export interface SetWordIndex {
  type: typeof SET_WORD_INDEX;
  payload: number;
}

export type WordleActionTypes =
  | SetAnswer
  | SetWord
  | AddCorrectLetter
  | AddAlmostLetter
  | AddWrongLetter
  | SetWordIndex;
