import React, { useState } from 'react';
import TodoForm from './components/toDoForm';
import { ToDoList } from './components/toDoList';

const ToDo = () => {
    const [toDoList, setTodoList] = useState([
        {id: 1, title: 'No Name - Ha Van Xuan - 1'},
        {id: 2, title: 'No Name - Ha Van Xuan - 2'},
        {id: 3, title: 'No Name - Ha Van Xuan - 3'}
    ]);
    console.log(toDoList);
    const handleClick = (todo) => {
       const index = toDoList.findIndex(item => item.id === todo.id);
       if (index < 0) return;
       let newTodo = [...toDoList];
       newTodo.splice(index, 1);
        setTodoList(newTodo);
    }
    const handleTodoFormSumbit= (formValues) => {
        const newTodo = {
            id: toDoList.length + 1,
            ...formValues,
        }
        const newTodoList = [...toDoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    return (
        <>
        <TodoForm onSumbit={handleTodoFormSumbit}/>
        <ToDoList todos={toDoList} onToDoClick={handleClick} />
        </>
    )
}
export default ToDo;