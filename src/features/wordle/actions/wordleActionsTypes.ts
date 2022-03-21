export const SET_WORD = "SET_WORD";
export const ADD_CORRECT_LETTER = "ADD_CORRECT_LETTER";
export const ADD_ALMOST_LETTER = "ADD_ALMOST_LETTER";
export const ADD_WRONG_LETTER = "ADD_WRONG_LETTER";
export const SET_ANSWER = "SET_ANSWER";
export const SET_WORD_INDEX = "SET_WORD_INDEX";
export const SET_HAS_WON = "SET_HAS_WON";
export const SET_NUMBER_OF_TRIES = "SET_NUMBER_OF_TRIES";
export const RESET_ATTEMPT = "RESET_ATTEMPT";

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

export interface SetHasWon {
  type: typeof SET_HAS_WON;
  payload: boolean;
}

export interface SetNumberOfTries {
  type: typeof SET_NUMBER_OF_TRIES;
  payload: number;
}

export interface ResetAttempt {
  type: typeof RESET_ATTEMPT;
}

export type WordleActionTypes =
  | SetAnswer
  | SetWord
  | AddCorrectLetter
  | AddAlmostLetter
  | AddWrongLetter
  | SetHasWon
  | SetWordIndex;
