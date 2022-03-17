// https://www.reactnative.express/app/data_management/usereducer

import {
  ADD_COUNTER,
  FETCH_FAILED,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  REMOVE_COUNTER,
} from "../actions/counterActionsTypes";

type InitialState = {
  count: number;
  loading: boolean;
  icons: { [key: string]: string };
};

const initialState: InitialState = {
  count: 0,
  loading: false,
  icons: {},
};

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case REMOVE_COUNTER:
      return {
        ...state,
        count: state.count - action.payload,
      };

    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        icons: action.payload,
      };

    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
