import { createStore } from "./redux";
import counterReducer from "./reducers/counter";
import infoReducer from "./reducers/info";

let initState = {
  count: 0,

  info: {
    name: "",
    desc: "",
  },
};

let store = createStore(reducer, initState);
console.log(store, 222);

store.subscribe(() => {
  let state = store.getState();
  console.log(`${state.info.name}: ${state.info.desc}`);
});

store.subscribe(() => {
  let state = store.getState();
  console.log(` ${state.count}`);
});

store.dispatch({
  type: "INCREMENT",
});
