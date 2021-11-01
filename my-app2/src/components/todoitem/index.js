import React from 'react'

function Todoitem () {
      return (
            <div className="todoitem">
              <li>{todo.name}</li>
              <button onClick={() => updateTodo(this.props.todo.id)}>Update</button>
              <button onClick={() => deleteTodo(this.props.todo.id)}>Delete</button>
            </div>
          );
      }
export default Todoitem;