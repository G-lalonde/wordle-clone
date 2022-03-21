import update from "react-addons-update";

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
      return update(state, {
        mots: {
          [state.currentWordIndex]: { $set: action.payload },
        },
      });

    case ADD_CORRECT_LETTER:
      return {
        ...state,
        correctLetters: [...state.correctLetters, action.payload],
      };

    case ADD_ALMOST_LETTER:
      return {
        ...state,
        almostCorrectLetters: [...state.almostCorrectLetters, action.payload],
      };

    case ADD_WRONG_LETTER:
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.payload],
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
