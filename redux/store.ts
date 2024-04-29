import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { taskReducer } from "./tasks";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (): any => [sagaMiddleware],
});
