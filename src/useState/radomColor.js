import React, { useEffect, useState } from 'react';
import '../App.css';

// 1 mảng gồm 5 màu: red, blue, pink, orange, yellow
// khi click box sẽ thay đổi ngẫu nhiên 5 màu này
// khi reset lại trình duyệt thì nó phải dữ lại được giá trị cuối cùng.

const getRadomColor = () => { // function radom color 1 trong 5 màu
  const listColor = ["violet", "blue", "pink", "orange", "yellow", "rgb(51, 203, 135)"];
  const indexColor = Math.trunc(Math.random() * listColor.length);
  return listColor[indexColor];
}


function BoxRamdomColor() {
  const [color, setColor] = useState(() => {
    let defaultColor = localStorage.getItem('color-box')
    return defaultColor || 'pink'
  });

  const handleColor = () => {
    const newColor = getRadomColor();
    localStorage.setItem('color-box', newColor);
    setColor(newColor);
  }

  useEffect(() => {
    setInterval(handleColor, 1500);
  }, [color]);

  return (
    <div className='heart' style={{ backgroundColor: color }} />
  );
}

export default BoxRamdomColor;
