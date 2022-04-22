import React, { useState } from "react";

const giftList = [
    'Chúc bạn may mắn lần sau!',
    'Bạn đã chúng giải độc đắc',
    'Ban đã may mắn chúng 1 món qua đặc biệt'
]
const GiftsComponent = () => {
    const [gift, setGift] = useState();
    console.log(gift);
    const handleGift = () => {
        // Math.floor: làm tròn xuống.
        //C1
        let index = Math.floor(Math.random() * giftList.length);

        // Math.trunc: làm tròn lên.
        //C2
        // let index = Math.trunc(Math.random() * giftList.length);
        console.log(index);
        setGift(giftList[index]);
    }
    return (
        <div>
            {gift || 'Mời bạn quay thưởng'}
            <button onClick={() => handleGift()}>
                quay thưởng
            </button>
        </div>
    )
}
export default GiftsComponent;