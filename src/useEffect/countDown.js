import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [countDown, setCountDown] = useState(200);

    //C1
    // useEffect(() => {
    //     const timeId = setInterval(()=> {
    //         setCountDown(prevCount => prevCount -1)
    //     }, 1000)
    //     return () => clearInterval(timeId);
    // }, [])

    //C2
    useEffect(() => {
        const timeId = setTimeout(() => {
            setCountDown(countDown - 1)
        }, 1000);
        return () => clearTimeout(timeId);
    }, [countDown]);
    
    return (
        <div>{countDown}</div>
    )
}
export default CountDown;
