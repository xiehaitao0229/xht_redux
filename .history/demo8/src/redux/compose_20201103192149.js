export default function compose(...funcs){
    console.log(funcs,111);
    if(funcs.length===0){
        return arg=>arg;
    }

    if(funcs.length===1){
        return funcs[0];
    }

    return funcs.reduce((a,b)=>(...args)=>a(b(...args)));
}