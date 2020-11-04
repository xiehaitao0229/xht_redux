const applyMiddleware = function (...middlewares) {
  /*返回一个重写createStore的方法*/
  return function rewriteCreateStoreFunc(oldCreateStore) {
    /*返回重写后新的 createStore*/
    return function newCreateStore(reducer, initState) {
      /*1. 生成store*/
      const store = oldCreateStore(reducer, initState);
      /*给每个 middleware 传下store，相当于 const logger = loggerMiddleware(store);*/
      /* const chain = [exception, time, logger]*/
      /* 现在的中间件拿到了完整的 store，他甚至可以修改我们的 subscribe 方法，
      按照最小开放策略，我们只用把 getState 给中间件就可以了！因为我们只允许你用 getState 方法 */
      const simpleStore = { getState: store.getState };
      const chain = middlewares.map(middleware=>middleware(simpleStore));
      let dispatch = store.dispatch;   
      /* 实现 exception(time((logger(dispatch))))*/
      chain.reverse().map(middleware=>{
          dispatch = middleware(dispatch)
      })


      /* 重写dispatch */
      store.dispatch = dispatch;
      return store;
    };
  };
};

export default applyMiddleware;