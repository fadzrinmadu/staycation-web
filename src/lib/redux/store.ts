import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from '@/lib/redux/features/counter/counterSlice';
import memberReducer from './features/member/memberSlice';
import detailReducer from './features/member/detailSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  member: memberReducer,
  detail: detailReducer,
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
