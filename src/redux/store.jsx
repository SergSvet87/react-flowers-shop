import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editPhotoCard from "./editPhotoCard";
import incrReducer from "./incrReducer";

const rootReducer = combineReducers({
  increment: incrReducer,
  editPhotoCard: editPhotoCard,
});

export const store = configureStore({
  reducer: rootReducer,
});
