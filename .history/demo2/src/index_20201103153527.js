import { createStore } from "./redux";
import reducer from "./redux/reducer";

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

/*自增*/
store.changeState({
  type: 'INCREMENT'
});
/*自减*/
store.changeState({
  type: 'DECREMENT'
});
/*随便改 计划外的修改是无效的！*/
store.changeState({
  count: 'abc'
});
