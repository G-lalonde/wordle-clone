export const SET_WORD1 = "SET_WORD1";
export const SET_WORD2 = "SET_WORD2";
export const SET_WORD3 = "SET_WORD3";
export const SET_WORD4 = "SET_WORD4";
export const SET_WORD5 = "SET_WORD5";
export const SET_ANSWER = "SET_ANSWER";

export interface SetAnswer {
  type: typeof SET_ANSWER;
  payload: string;
}

export interface SetWord1 {
  type: typeof SET_WORD1;
  payload: string;
}

export interface SetWord2 {
  type: typeof SET_WORD2;
  payload: string;
}

export interface SetWord3 {
  type: typeof SET_WORD3;
  payload: string;
}

export interface SetWord4 {
  type: typeof SET_WORD4;
  payload: string;
}

export interface SetWord5 {
  type: typeof SET_WORD5;
  payload: string;
}
