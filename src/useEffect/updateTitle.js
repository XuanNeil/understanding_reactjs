import React, { useEffect, useState } from 'react';

export default function UpdateTitle() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    });

    return (
        <div>
            <label>Title:</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}