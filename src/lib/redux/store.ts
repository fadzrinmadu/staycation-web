import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "@/lib/redux/features/counter/counterSlice";
import memberReducer from "./features/member/memberSlice";
import detailReducer from "./features/member/detailSlice";
import bookingReducer from "./features/member/bookingSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  member: memberReducer,
  detail: detailReducer,
  booking: bookingReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            "booking/setBookingRequest", 
            "booking/updateBookingRequestField", 
            "booking/submitBooking/pending",
          ],
          ignoredPaths: ["booking.request.image"],
        },
      }),
  });
};

// Infer types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
