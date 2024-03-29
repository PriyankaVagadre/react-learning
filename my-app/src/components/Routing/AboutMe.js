import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";

// const reducer = (state, action)=>{
//   switch(action.type){
//       case "increment":
//         return{count : state.count +1, showText : state.showText}
//       case "showText":
//         return {count:state.count, showText :!state.showText}
//       default:
//         return state
//   }
// }

function AboutMePage() {
    // const [count, setCount] = useState(0)

    // function incrementCount() {
    //     setCount(count + 1)
    // }

    // const [state, dispatch] = useReducer(reducer, ({ count: 0, showText: true }))

    const inputRef = useRef(null);

    useLayoutEffect(()=>{
        console.log("useLayoutEffect called",inputRef.current.value)
    })

    useEffect( ()=>{
        inputRef.current.value ="world"
        console.log("UseEffect called",inputRef.current.value)
    },[]) // you can use [] calling useEffect only once

    function showInput() {
        console.log(inputRef.current.value)
        inputRef.current.focus()
    }
    return <div>About Me Page
        <div>
            <h2>React looks</h2>
            {/* <h3>{count}</h3> */}
            {/* <button onClick={incrementCount}>Increment</button>  */}

            {/* <h3>{state.count}</h3>
            <button onClick={() =>{
                dispatch({type: "increment"});
                dispatch({type: "showText"})
            }
        }>Increment and Change Text</button> 
            {state.showText && <p>Show Text</p>} */}
            {/* {count} */}

            <input type="text" value="hello" ref={inputRef} />
            <button onClick={showInput}>GetValue</button>

        </div>
    </div>
}
export default AboutMePage;