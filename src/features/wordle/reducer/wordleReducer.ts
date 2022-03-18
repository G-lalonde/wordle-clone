import {
  ADD_ALMOST_LETTER,
  ADD_CORRECT_LETTER,
  ADD_WRONG_LETTER,
  SET_ANSWER,
  SET_WORD,
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
};

const initialState: InitialState = {
  mots: ["", "", "", "", "", ""],
  correctLetters: [] as string[],
  almostCorrectLetters: [] as string[],
  wrongLetters: [] as string[],
  answer: "elise",
  currentWordIndex: 0,
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

    default:
      return state;
  }
};
