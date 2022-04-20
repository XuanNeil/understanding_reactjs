import React, { useState } from 'react';
import './App.css';

const data = [
    { id: 1, title: 'Check box 1' },
    { id: 2, title: 'Check box 2' },
    { id: 3, title: 'Check box 3' },
    { id: 4, title: 'Check box 4' },
];

function CustomCheckBox() {
    const [check, setCheck] = useState([]);

    const handleCheck = (id) => {
        setCheck(prev => {
            let isChecked = check.includes(id); //boolean
            if (isChecked) { // unChecked
                return check.filter(item => item !== id);
            } else {
                return [
                    ...prev,
                    id
                ]
            }
        })
    }

    let isChecked = check.length === data.length;

    const handleAllCheck = () => {
        let id = data.map(item => item.id);
        if (isChecked) {
            setCheck([]);
        } else {
            setCheck(id);
        }
    }

    return (
        <div className='App'>
            <div>
                <input type={!(check.length === data.length) && check.some(Boolean) ? 'radio' : 'checkbox'} checked={isChecked} onChange={handleAllCheck} />
                Sellect all.
            </div>
            {
                data.map(item => (
                    <div key={item.id}>
                        <input
                            type={'checkbox'}
                            checked={check.includes(item.id)}
                            onChange={() => handleCheck(item.id)}
                            className='styleCheckBox' />
                        {item.title}
                    </div>
                ))
            }
        </div>
    );
}

export default CustomCheckBox;
