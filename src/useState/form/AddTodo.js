import React, { useState } from 'react';

export default function AddTodo({ onAddTo }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                type={'text'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle('')
                    onAddTo(title)
                }}
            >
                Add
            </button>
        </>
    )
}