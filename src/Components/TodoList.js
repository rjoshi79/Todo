import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      ) : (
        <p>No Todos Available</p>
      )}
    </div>
  );
}

export default TodoList;
