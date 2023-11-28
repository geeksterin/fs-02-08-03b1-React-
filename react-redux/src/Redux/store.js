import { createStore } from "redux";
import { counterReducer } from "./Counter/counterReducer";

export const store = createStore(counterReducer);
