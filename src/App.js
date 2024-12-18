import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Sample users to assign
  const users = ["Alice", "Bob", "Charlie"];

  // Create or Update Todo
  

const addOrUpdateTodo = (todo) => {
  setTodos((prev) => {
    if (todo.id) {
      // Update existing Todo
      return prev.map((t) => (t.id === todo.id ? { ...todo } : t));
    } else {
      // Add new Todo
      return [...prev, { ...todo, id: uuidv4() }];
    }
  });
};

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Search Todo
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort Todos
  const sortedTodos = filteredTodos.sort((a, b) => {
    return sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  return (
    <div className="App">
      <br></br>
      <h1 style={{textAlign:"center"}}>Todo Application</h1>
      {/* Todo Form */}
      <TodoForm onAddOrUpdate={addOrUpdateTodo} users={users} />

      {/* Search Input */}
      <br></br>
      <br></br>
      <input type="text"
        placeholder="Search Todo..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br></br>
      <br></br>

      {/* Sort Button */}
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort 
      </button>

      {/* Todo List */}
      <TodoList
        todos={sortedTodos}
        onDelete={deleteTodo}
        onUpdate={addOrUpdateTodo}
      />
    </div>
  );
}

export default App;
