export default function createStore(initState) {
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
  function changeState(newState) {
    state = newState;
    for (let i = 0; i < listeners.length; i++) {
      let listener = listeners[i];
      listener();
    }
  }

  return {
    getState,
    subscribe,
    changeState,
  };
}
