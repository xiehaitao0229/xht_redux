import { createStore, combineReducers,applyMiddleware,bindActionCreators } from "./redux";
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
  info: infoReducer,
});

/*接收旧的 createStore，返回新的 createStore*/
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);

let store = createStore(reducer,{},rewriteCreateStoreFunc);



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
