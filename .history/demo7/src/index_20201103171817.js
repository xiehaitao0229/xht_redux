import { createStore, combineReducers } from "./redux";
import counterReducer from "./reducers/counter";
import infoReducer from "./reducers/info";

import exceptionMiddleware from './middlewares/exceptionMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

/* let initState = {
  count: 0,
  info: {
    name: "",
    desc: "",
  },
}; */

const reducer = combineReducers({
  counter: counterReducer,
});

let store = createStore(reducer);

const nextReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

/* 
  什么时候需要使用replaceReducer动态加reducer呢
  1.当你的程序要进行代码分割的时候
  2.当你要动态的加载不同的reducer的时候
  3.当你要实现一个实时reloading机制的时候
*/
store.replaceReducer(nextReducer);

const next = store.dispatch;
const exception = exceptionMiddleware(store);
const logger = loggerMiddleware(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));



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
