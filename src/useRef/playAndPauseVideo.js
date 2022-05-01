import React, { useEffect, useRef, useState } from "react";

const PlayAndPauseVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        console.log(ref);
    }, [])
    const handleClick = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        nextIsPlaying ? ref.current.play() : ref.current.pause();
    }

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video
                width='250'
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>

        </>
    )
}
export default PlayAndPauseVideo;