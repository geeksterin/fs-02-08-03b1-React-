import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "./constant";

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function resetCounter() {
  return {
    type: RESET_COUNTER,
  };
}
