import React, { useState } from 'react';
import TodoForm from './components/toDoForm';
import { ToDoList } from './components/toDoList';

const ToDo = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'No Name - Ha Van Xuan - 1' },
        { id: 2, title: 'No Name - Ha Van Xuan - 2' },
        { id: 3, title: 'No Name - Ha Van Xuan - 3' }
    ]);
    console.log(todoList);
    const handleRemoveClick = (todo) => {
        const index = todoList.findIndex(item => item.id === todo.id);
        if (index < 0) return;
        let newTodo = [...todoList];
        newTodo.splice(index, 1);
        setTodoList(newTodo);
    }
    const handleTodoFormSumbit = (formValues) => {
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    return (
        <>
            <TodoForm onSumbit={handleTodoFormSumbit} />
            <ToDoList todos={todoList} onToDoClick={handleRemoveClick} />
        </>
    )
}
export default ToDo;