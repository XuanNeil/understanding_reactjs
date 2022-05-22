import React, { memo } from "react";

const Content = ({ onHanldeIncrete }) => {
    console.log('content');
    return (
        <>
            <h2>Su dung useCallback</h2>
            <button onClick={onHanldeIncrete}>Add</button>
        </>
    )
}
export default memo(Content)