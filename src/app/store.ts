import { wordleReducer } from "@/features/wordle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// PUT ALL REGISTERED REDUCERS HERE
export const rootReducer = combineReducers({
  wordle: wordleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
