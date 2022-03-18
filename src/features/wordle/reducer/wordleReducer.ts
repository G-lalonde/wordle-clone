import { ANSWER } from "@/app/constants";
import {
  ADD_ALMOST_LETTER,
  ADD_CORRECT_LETTER,
  ADD_WRONG_LETTER,
  SET_ANSWER,
  SET_WORD,
  SET_HAS_WON,
  SET_WORD_INDEX,
  WordleActionTypes,
} from "../actions/wordleActionsTypes";

type InitialState = {
  mots: string[];
  correctLetters: string[];
  almostCorrectLetters: string[];
  wrongLetters: string[];
  answer: string;
  currentWordIndex: number;
  hasWon: boolean;
};

const initialState: InitialState = {
  mots: ["", "", "", "", "", ""],
  correctLetters: [] as string[],
  almostCorrectLetters: [] as string[],
  wrongLetters: [] as string[],
  answer: ANSWER,
  currentWordIndex: 0,
  hasWon: false,
};

export const wordleReducer = (
  state = initialState,
  action: WordleActionTypes,
) => {
  switch (action.type) {
    case SET_WORD:
      state.mots[state.currentWordIndex] = action.payload;

      return {
        ...state,
      };

    case ADD_CORRECT_LETTER:
      state.correctLetters.push(action.payload);

      return {
        ...state,
      };

    case ADD_ALMOST_LETTER:
      state.almostCorrectLetters.push(action.payload);

      return {
        ...state,
      };

    case ADD_WRONG_LETTER:
      state.wrongLetters.push(action.payload);

      return {
        ...state,
      };

    case SET_ANSWER:
      return {
        ...state,
        answer: action.payload,
      };

    case SET_WORD_INDEX:
      return {
        ...state,
        currentWordIndex: action.payload,
      };

    case SET_HAS_WON:
      return {
        ...state,
        hasWon: action.payload,
      };

    default:
      return state;
  }
};
