import React, { useState } from "react";

const TodoForm = ({ onSumbit }) => {
    const [value, setValue] = useState('');
    const handleValueChange = (e) => {
        setValue(e.target.value);
    }
    const handleSumbit = (e) => {
        e.preventDefault(); // chặn trình duyệt tự động reload
        if (!onSumbit) return;
        const formValues = {
            title: value,
            //...sau có trường khác thì add thêm.
        }
        onSumbit(formValues);

        //Reset value
        setValue('');
    }
    return (
        <form onSubmit={handleSumbit}>
            <input
                type={'text'}
                value={value}
                onChange={handleValueChange}
                placeholder='Enter Name...'
            />
        </form>
    )
}
export default TodoForm;