import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskTodo';

const initialTodos = [
    { id: 0, title: 'No Name', done: false },
    { id: 1, title: 'Ha Xuan', done: true },
    { id: 2, title: 'Ha Van Xuan', done: true },
]
let nextId = 3;

const TodoComponent = () => {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (title) => {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    const handleChangeTodo = (nextTodo) => {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }));
    }
    const handleDeleteTodo = (todoId) => {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo onAddTo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    )
}
export default TodoComponent;