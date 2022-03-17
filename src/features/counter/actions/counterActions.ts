import { Dispatch } from "@reduxjs/toolkit";
import {
  AddCounter,
  ADD_COUNTER,
  FetchDispatchType,
  FETCH_FAILED,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  RemoveCounter,
  REMOVE_COUNTER,
} from "./counterActionsTypes";

// EXAMPLE OF SYNC ACTION
export const add = (count: number): AddCounter => ({
  type: ADD_COUNTER,
  payload: count,
});

export const remove = (count: number): RemoveCounter => ({
  type: REMOVE_COUNTER,
  payload: count,
});

// EXAMPLE OF ASYNC ACTION
export const fetchAsync =
  () => async (dispatch: Dispatch<FetchDispatchType>) => {
    dispatch({ type: FETCH_REQUEST });

    await fetchSecretSauce()
      .then(response => response.json())
      .then(
        response => {
          dispatch({
            type: FETCH_SUCCESS,
            payload: response,
          });
        },
        error => dispatch({ type: FETCH_FAILED, payload: error }),
      );
  };

const fetchSecretSauce = () => {
  return fetch(
    "https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/FontAwesome5Free.json",
  );
};
