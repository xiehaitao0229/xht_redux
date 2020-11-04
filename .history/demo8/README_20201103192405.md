实现compose

省略initState
有时候我们创建 store 的时候不传 initState，我们怎么用？
允许  const store = createStore(reducer, rewriteCreateStoreFunc);这种写法
