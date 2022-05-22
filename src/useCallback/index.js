import React, { useCallback, useState } from "react";
import Content from "./Content";

const DemoUseCallBack = () => {
    const [count, setCount] = useState(0);
    console.log(1);
    const handleIncreate = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <>
            <Content onHanldeIncrete={handleIncreate} />
            <h2>Count: {count}</h2>
        </>
    )
}
export default DemoUseCallBack;