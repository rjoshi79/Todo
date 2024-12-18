import React, { useState } from "react";
import "./TodoForm.css"

function TodoForm({ onAddOrUpdate, users }) {
  const [todo, setTodo] = useState({
    id: null,
    title: "",
    description: "",
    assignedUser: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title) return;
    onAddOrUpdate(todo);
    setTodo({ id: null, title: "", description: "", assignedUser: "" });
  };

  return (
    <div className="todo-div">
      <form onSubmit={handleSubmit} className="todo-form" >


        <input
          type="text"
          placeholder="Title"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
        <br></br>
        <br>
        </br>

        <textarea
          placeholder="Description"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <br></br>
        <br></br>
        <select
          value={todo.assignedUser}
          onChange={(e) => setTodo({ ...todo, assignedUser: e.target.value })}
        >
          <option value="">Assign User</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>

        <button type="submit">{todo.id ? "Update" : "Add"} Todo</button>

      </form>
    </div>
  );
}

export default TodoForm;
