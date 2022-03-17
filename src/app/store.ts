import { counterReducer } from "@/features/counter";

import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// PUT ALL REGISTERED REDUCERS HERE
export const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
