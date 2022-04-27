import React, { useState } from 'react';

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
} 

const Task= ({ todo, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <label>
            <input
                type={'checkbox'}
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    })
                }}
            />
            {isEditing ? (
                <>
                    <input
                        value={todo.title}
                        onChange={e => {
                            onChange({
                                ...todo,
                                title: e.target.value
                            })
                        }}
                    />
                    <button onClick={() => setIsEditing(false)}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    {todo.title}
                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    )
}
