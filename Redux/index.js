const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE"; //action String
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
} //action builder -> building BUY_CAKE action

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

/**
 dispatch(buyCake())
 dispatch("incrementCount")
 dispatch("incrementCount")
 dispatch("incrementCount")
 dispatch("incrementCunt")
 dispatch("incremetCount")
 */
