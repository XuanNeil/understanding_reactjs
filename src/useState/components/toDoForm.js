import React, {useState}  from "react";

const TodoForm = ({onSumbit}) => {
    const [value, setValue] = useState('');
    const handleValueChange = (e) => {
        setValue(e.target.value);
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        if (!onSumbit) return;
        const formValues = {
            title: value,
            //...
        }
        onSumbit(formValues);

        //Reset input
        setValue('');
    }
    return (
      <form onSubmit={handleSumbit}>
          <input type={'text'} value={value} onChange={handleValueChange} />
      </form>
    )
}
export default TodoForm;