import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import Saga from "./saga/saga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers,
  middleware: () => [sagaMiddleWare],
});

sagaMiddleWare.run(Saga);

export default store;
