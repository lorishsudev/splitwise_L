import { configureStore } from "@reduxjs/toolkit";
import splitwiseReducer from "./splitwiseSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from "redux";
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";


const reducers = combineReducers({
  splitwise: splitwiseReducer,
});
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: null,
};


const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
      serializableCheck: false,
    })
});

let persistor = persistStore(store);

export { store, persistor };