export default function createStore(reducer, initState) {
  let state = initState;
  let listeners = [];

  function getState() {
    return state;
  }

  //  订阅
  function subscribe(listener) {
    listeners.push(listener);
  }

  //  发布
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      let listener = listeners[i];
      listener();
    }
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    dispatch({ type: Symbol() });
  }

  /* 注意！只修改了这里，用一个不匹配任何计划的type,；熬获取初始值 */
  dispatch({
    type: Symbol(),
  });

  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  };
}
