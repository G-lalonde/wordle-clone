export const ADD_COUNTER = "ADD_COUNTER";
export const REMOVE_COUNTER = "REMOVE_COUNTER";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export interface AddCounter {
  type: typeof ADD_COUNTER;
  payload: number;
}

export interface RemoveCounter {
  type: typeof REMOVE_COUNTER;
  payload: number;
}

interface FetchRequest {
  type: typeof FETCH_REQUEST;
}

interface FetchRequest {
  type: typeof FETCH_REQUEST;
}

interface FetchSuccess {
  type: typeof FETCH_SUCCESS;
  payload: { [key: string]: string };
}

interface FetchFailed {
  type: typeof FETCH_FAILED;
  payload: String;
}

export type FetchDispatchType = FetchRequest | FetchSuccess | FetchFailed;
