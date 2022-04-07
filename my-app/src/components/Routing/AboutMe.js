import { useState } from "react";

function AboutMePage(){
    const [count, setCount]= useState(0)

    function incrementCount(){
        setCount(count+1)
    }
    return<div>About Me Page
        <div>
            <h2>React looks</h2>
            <h3>{count}</h3>
            <button onClick={incrementCount}>Increment</button>
        </div>
    </div>
    }
    export default AboutMePage;