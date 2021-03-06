import React, { useState } from 'react';
// import ToDoForm from './ToDoForm';

function ToDo({todos, completeTodo, removeTodo, updateTodo }) {

    // const [tedit, setTedit] = useState({
    //     id: null,
    //     value: '',
    //     test: ''
    // })
    
    // const submitUpdate = (value) => {

    //     updateTodo(tedit.id, value)
    //     setTedit({
    //         id: null,
    //         value: '',
    //     })
    // }

    // if (tedit.id) {
    //     return <ToDoForm edit={tedit} onSubmit={submitUpdate} />
    // }

    // const [tfinish, setTfinish] = useState()

    // const finishTodo = () => {

    // }

// TODO modify css with class for finished to-do
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.name}
            {todo.description}
            {todo.priority}
            {todo.complete}
        </div>
        <div className='todo-btn'>
            <button
            className='delete-btn'
            onClick={() => removeTodo(todo.id)}
            >Supprimer</button>
            <button
            className='finish-btn'
            onClick={() => completeTodo(todo.complete)}
            >Terminer</button>
            {/* <button
            className='edit-btn'
            onClick={() => setTedit({id: todo.id, value: todo.name})}
            >Edit</button> */}
        </div>
    </div>
  ))
}

export default ToDo