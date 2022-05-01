import React, { useRef } from "react";

const FocusTextInput = () => {
    const myRef = useRef(null);
    const handleClick = () => {
        myRef.current.focus();
    }

    return (
        <>
            <input ref={myRef} />
            <button onClick={handleClick}>Focus the input</button>
        </>
    )
}
export default FocusTextInput;