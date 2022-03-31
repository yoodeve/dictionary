import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import word from "./modules/word";

const middlewares = [thunk];
const rootReducer = combineReducers({word});
//meaning, pron, exF, exK
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;