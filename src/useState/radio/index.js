import React, { useState } from 'react';
import '../App.css';

const data = [
  { id: 1, title: 'Radio 1' },
  { id: 2, title: 'Radio 2' },
  { id: 3, title: 'Radio 3' },
  { id: 4, title: 'Radio 4' },
];

function CustomRadio() {
  const [checked,setChecked] = useState(3);

  return (
    <div className='App'>
      {
        data.map(item => (
          <div key={item.id}>
            <input
              type={'radio'}
              checked={checked === item.id}
              onChange={()=> setChecked(item.id)}
              className='styleCheckBox' />
            {item.title}
          </div>
        ))
      }
    </div>
  );
}

export default CustomRadio;
