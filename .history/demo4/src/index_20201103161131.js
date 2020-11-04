import { createStore, combineReducers } from "./redux";
import counterReducer from "./reducers/counter";
import infoReducer from "./reducers/info";

/* let initState = {
  count: 0,
  info: {
    name: "",
    desc: "",
  },
}; */

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});


let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
    console.log(`${state.info.name}`);
});

store.subscribe(() => {
  let state = store.getState();
  console.log(` ${state.counter.count}`);
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "SET_NAME",
  name: "xht",
});
