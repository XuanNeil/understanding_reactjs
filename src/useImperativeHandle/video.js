import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from './video-1.mp4'

const MyVideo = (props, ref) => {
    const videoRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
            ref={videoRef}
            width="420"
            height="345"
            src={video1}
            {...props}
        >
        </video>
    )
}
export default forwardRef(MyVideo);