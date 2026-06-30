import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from '@/lib/redux/features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
