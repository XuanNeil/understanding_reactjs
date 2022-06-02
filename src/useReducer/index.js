/*
* useReducer
* syntax: const [state, dispatch] = useReducer(reducer, initialArg, init);
*
*  1. Initial State
*  2. Action type
*  3. reducer function
*  4. dispatch
*/

import React, { useReducer } from 'react'

//1
const initialState = {
    count: 0
}
//2
const increment_type = 'increment';
const decrement_type = 'decrement';

//3
function reducer(state, action){
    switch(action.type){
        case increment_type:
            return {count: state.count + 1}
        case decrement_type: 
            return {count: state.count - 1}
        default:
            throw new Error()
    }
} 

//4
function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state.count);
    return (
        <>
        Counter: {state.count}
        <button onClick={() =>dispatch({type: increment_type})}>Add</button>
        <button onClick={() =>dispatch({type: decrement_type})}>Sub</button>
        </>
    )
}
export default Counter;