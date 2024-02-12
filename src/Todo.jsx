import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");
  let addTodo = () => {
    if (newTodo.trim !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };
  let deleteTodo = (index) => {
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  let toggleTodo = (index) => {
    let updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  return (
    <div id="container">
      <h1>Oogwae will show u da wae</h1>
      <img src="./oogwae.jpeg" alt="" />
      <input
        type="text"
        placeholder="enter your task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>add task</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div id="hero">
              <div id="subhero">
                <li key={index}>
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {index + 1}. {todo.text}
                  </span>
                  <button onClick={() => toggleTodo(index)}>
                    {todo.completed ? "uncheck" : "check"}
                  </button>
                  <button onClick={() => deleteTodo(index)}>delete</button>
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;
