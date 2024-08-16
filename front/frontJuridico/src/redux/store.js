import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import turnosReducer from "./turnosReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    turnos: turnosReducer,
  },
});
export default store;
