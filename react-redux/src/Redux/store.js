import { createStore, combineReducers } from "redux";
import { counterReducer } from "./Counter/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    
});

export const store = createStore(counterReducer);
// export const store = createStore(rootReducer);
