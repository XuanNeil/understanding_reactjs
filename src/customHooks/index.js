import React, { useState } from "react";
import usePrevious from "./usePrevious";

export default function CustomHook() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    const handleClick = () => {
        setCount(count => count + 1);
    }
    
    return (
        <div>
            <h1>count: {count}, prevCount: {prevCount}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}