import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "./constant";

const counterState = {
  count: 0,
};

export function counterReducer(state = counterState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET_COUNTER:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
}
