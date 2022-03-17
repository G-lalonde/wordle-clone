import {
  SET_ANSWER,
  SET_WORD1,
  SET_WORD2,
  SET_WORD3,
  SET_WORD4,
  SET_WORD5,
} from "../actions/wordleActionsTypes";

type InitialState = {
  mot1: string;
  mot2: string;
  mot3: string;
  mot4: string;
  mot5: string;
  answer: string;
};

const initialState: InitialState = {
  mot1: "chov1",
  mot2: "chov2",
  mot3: "chov3",
  mot4: "cho",
  mot5: "",
  answer: "hcove",
};

export const wordleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_WORD1:
      return {
        ...state,
        mot1: action.payload,
      };
    case SET_WORD2:
      return {
        ...state,
        mot2: action.payload,
      };
    case SET_WORD3:
      return {
        ...state,
        mot3: action.payload,
      };
    case SET_WORD4:
      return {
        ...state,
        mot4: action.payload,
      };
    case SET_WORD5:
      return {
        ...state,
        mot5: action.payload,
      };
    case SET_ANSWER:
      return {
        ...state,
        answer: action.payload,
      };

    default:
      return state;
  }
};
