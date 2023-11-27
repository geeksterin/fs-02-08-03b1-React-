const redux = require("redux");
const createStore = redux.createStore;

const intitialState = {
  cakeCount: 10,
};

const BUY_CAKE = "BUY_CAKE"; //action String
// const BUY_ICECREAM = "BUY_ICECREAM"; //action String

function buyCake() {
  return {
    type: BUY_CAKE,
  };
} //action builder -> building BUY_CAKE action

// function buyIceCream() {
//   return {
//     type: BUY_ICECREAM,
//   };
// } //action builder -> building BUY_ICECREAM action
/**
 dispatch(buyCake())
 dispatch("incrementCount")
 dispatch("incrementCount")
 dispatch("incrementCount")
 dispatch("incrementCunt")
 dispatch("incremetCount")
 */

function reducer(state = intitialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakeCount: state.cakeCount - 1,
      };
  }
}

const store = createStore(reducer);

// console.log(store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

console.log(store.getState());
