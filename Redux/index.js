const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// const intitialState = {
//   cakeCount: 10,
//   iceCreamCount: 20,
// };

const cakeState = {
  cakeCount: 10,
};
const iceCreamState = {
  iceCreamCount: 20,
};

const BUY_CAKE = "BUY_CAKE"; //action String
const BUY_ICECREAM = "BUY_ICECREAM"; //action String

function buyCake() {
  return {
    type: BUY_CAKE,
  };
} //action builder -> building BUY_CAKE action

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
} //action builder -> building BUY_ICECREAM action
/**
 dispatch(buyCake())
 dispatch("incrementCount")
 dispatch("incrementCount")
 dispatch("incrementCount")
 dispatch("incrementCunt")
 dispatch("incremetCount")
 */

// function reducer(state = intitialState, action) {
//   switch (action.type) {
//     case BUY_CAKE:
//   return {
//     ...state,
//     cakeCount: state.cakeCount - 1,
//   };
// case BUY_ICECREAM:
//   return {
//     ...state,
//     iceCreamCount: state.iceCreamCount - 1,
//   };
//   }
// }

function cakeReducer(state = cakeState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakeCount: state.cakeCount - 1,
      };
    default:
      return state;
  }
}

function iceCreamReducer(state = iceCreamState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        iceCreamCount: state.iceCreamCount - 1,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// const store = createStore(reducer);
const store = createStore(rootReducer);

console.log(store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

console.log(store.getState());
