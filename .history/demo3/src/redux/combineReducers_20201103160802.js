export default function combineReducers(reducers){
    /* [counter,info] */
    const reducerKeys = Object.keys(reducers);

    /* 返回合并后的新的reducer函数 */
    return function combination(state = {}, action) {
        /* 生成的新state */
        const nextState = {};

        /* 遍历执行所有的reducers,整合成为一个新的state */
        for (let i = 0; i < reducerKeys.length; i++) {
            let key = reducerKeys[i];
            const reducer = reducers[key];
            /* 之前的key的state */
            const previousStateForKey = state[key];
            /*执行 分 reducer，获得新的state*/
            const nextStateForKey = reducer(previousStateForKey,action);
            nextState[key] = nextStateForKey
        }

        return nextState;
    }
}