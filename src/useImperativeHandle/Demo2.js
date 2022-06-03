import React, { useEffect, useRef } from "react";
import MyVideo from "./video";

const Demo2 = () => {
    const videoRef = useRef(null);
    
    useEffect(()=> {
        console.log(videoRef.current);
    })

    const handlePlay = () =>{
        videoRef.current.play();
    }
    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <>
            <MyVideo ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pasue</button>
        </>
    )
}
export default Demo2;