import { ANSWERS } from "@/app/constants";
import update from "react-addons-update";
import * as types from "../actions/wordleActionsTypes";

type InitialState = {
  mots: string[];
  correctLetters: string[];
  almostCorrectLetters: string[];
  wrongLetters: string[];
  answer: string;
  currentWordIndex: number;
  hasWon: boolean;
  numberOfTries: number;
};

const initialState: InitialState = {
  mots: ["", "", "", "", "", ""],
  correctLetters: [] as string[],
  almostCorrectLetters: [] as string[],
  wrongLetters: [] as string[],
  answer: ANSWERS[275],
  currentWordIndex: 0,
  hasWon: false,
  numberOfTries: 0,
};

export const wordleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_WORD:
      return update(state, {
        mots: {
          [state.currentWordIndex]: { $set: action.payload },
        },
      });

    case types.ADD_CORRECT_LETTER:
      return {
        ...state,
        correctLetters: [...state.correctLetters, action.payload],
      };

    case types.ADD_ALMOST_LETTER:
      return {
        ...state,
        almostCorrectLetters: [...state.almostCorrectLetters, action.payload],
      };

    case types.ADD_WRONG_LETTER:
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.payload],
      };

    case types.SET_ANSWER:
      return {
        ...state,
        answer: action.payload,
      };

    case types.SET_WORD_INDEX:
      return {
        ...state,
        currentWordIndex: action.payload,
      };

    case types.SET_HAS_WON:
      return {
        ...state,
        hasWon: action.payload,
      };

    case types.SET_NUMBER_OF_TRIES:
      return {
        ...state,
        numberOfTries: action.payload,
      };

    case types.RESET_ATTEMPT:
      return {
        ...state,
        mots: ["", "", "", "", "", ""],
        correctLetters: [] as string[],
        almostCorrectLetters: [] as string[],
        wrongLetters: [] as string[],
        currentWordIndex: 0,
        hasWon: false,
        numberOfTries: state.numberOfTries + 1,
      };

    default:
      return state;
  }
};
