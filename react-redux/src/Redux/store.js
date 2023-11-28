import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./Counter/counterReducer";

// const rootReducer = combineReducers({
//     counter: counterReducer,
//     user:userReducer
// });

export const store = createStore(counterReducer);
// export const store = createStore(rootReducer);
