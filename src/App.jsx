import React, { useState } from "react";
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="container">
      <div className="centered-content">
        <a href="https://react.dev" target="_blank">

        </a>
        <h1 className="header">ToDo List</h1>
        <div className="card">
          <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
              <label htmlFor="item">New Item</label>
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                id="item"
              />
            </div>
            <button className="btn">Add</button>
          </form>
          <ul className="list">
            {todos.map((todo) => (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                </label>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
