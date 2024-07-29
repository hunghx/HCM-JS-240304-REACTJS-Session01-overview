import React, { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState(() => {
        return [{
            name: 'đi học',
            completed: false,
            id: 1
        }, {
            name: 'đi chơi',
            completed: true,
            id: 2
        }, {
            name: 'đi ngủ',
            completed: false,
            id: 3
        }]
    }); // sử dụng useState để quản lý state của component

    const [name, setName] = useState("");

    const handleSubmit = (e) => { // React.FormEvent<HTMLFormElement>
        e.preventDefault();
        // thêm mới 
        let newTodo = {
            id: todos[todos.length - 1].id + 1, // tự tăng
            name: name,
            completed: false
        }

        // thêm vào cuối mảng
        setTodos([...todos, newTodo]);
        setName(""); // xóa input
    }

    const toggleStatus = (id) => {
        let newTodos = todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        setTodos([...newTodos])
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            let newTodos = todos.filter(todo => todo.id != id) // lọc những phần tử ko cần xóa
            setTodos([...newTodos])
        }

    }
    return (
        <div className='box'>
            <h2>To Do App</h2>
            <form onSubmit={handleSubmit} className='form-item'>
                <input type="text" placeholder='some works' value={name} onChange={e => setName(e.target.value)} />
                <button type='submit'>+</button>
            </form>
            <hr />
            <ul className='list'>
                {
                    todos.map((todo) => <li key={todo.id} className='list-item'><input defaultChecked={todo.completed} type="checkbox" onClick={() => toggleStatus(todo.id)} /><span className={todo.completed ? 'through-line' : ''}>{todo.name}</span> <button onClick={() => handleDelete(todo.id)}>X</button></li>)
                }

            </ul>
        </div>
    )
}
