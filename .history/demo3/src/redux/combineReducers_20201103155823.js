export default function combineReducers(reducers){
    /* [counter,info] */
    const reducerKeys = Object.keys(reducers);
    console.log(reducerKeys,5);

    /* 返回合并后的新的reducer函数 */
    return function combination(state = {}, action) {
        /* 生成的新state */
        const nextState = {};

        /* 遍历执行所有的reducers,整合成为一个新的state */
        for (let i = 0; i < reducerKeys.length; i++) {
            let key = reducerKeys[i];
            const reducer = reducers[key];
            /* 之前的key的state */
            console.log(state[key],66)
        }
    }
}