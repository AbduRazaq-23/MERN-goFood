import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/dataSlice";

const store = configureStore({
  reducer: {
    data: reducer,
  },
});

export { store };
