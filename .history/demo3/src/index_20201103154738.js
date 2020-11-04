import { createStore,combineReducers } from "./redux";
import counterReducer from "./reducers/counter";
import infoReducer from "./reducers/info";

let initState = {
  count: 0,

  info: {
    name: "",
    desc: "",
  },
};

const reducer = combineReducers({
  counterReducer,
  infoReducer
})

console.log(reducer,111)

let store = createStore(reducer, initState);

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
