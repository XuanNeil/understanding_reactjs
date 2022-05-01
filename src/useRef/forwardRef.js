import React, { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />
});

const DemoForwardRef = () => {
    const myRef = useRef(null);
    const handleClick = () => {
        myRef.current.focus();
    }

    return (
        <>
        <MyInput ref={myRef} />
        <button onClick={handleClick}>
            Focus the input!
        </button>
        </>
    )
}
export default DemoForwardRef;