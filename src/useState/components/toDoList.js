import React from "react";


export const ToDoList = ({ todos, onToDoClick }) => {

    const handleClick = (todo) => {
        if (onToDoClick) {
            onToDoClick(todo);
        }
    }
    return (
        <ul>
            {
                todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => handleClick(todo)}>
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    )
}