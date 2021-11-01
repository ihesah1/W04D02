import React, { useState } from "react";
import "./style.css";
import Todoitem from "../Todoitem";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1,
     name: "play" },
    { id: 2,
    name: "sleep" },
  ]);

  const addTodo = (event) => {
    event.preventDefault();
    if (event.target.task.value) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          name: event.target.task.value,
        },
      ]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const updateTodo = (id) => {
    const newValue = prompt("Enter the new value:");
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) {
          return (todo.name = newValue);
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo">
      <form onSubmit={addTodo}>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={index}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;