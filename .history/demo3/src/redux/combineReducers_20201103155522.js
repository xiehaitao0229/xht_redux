export default function combineReducers(reducers){
    /* [counter,info] */
    const reducerKeys = Object.keys(reducers);
    console.log(reducerKeys,5);

    /* 返回合并后的新的reducer函数 */
    return function combination(state = {}, action) {
        
    }
}