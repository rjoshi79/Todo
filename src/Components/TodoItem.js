
import React from "react";
import "./TodoItem.css"

function TodoItem({ todo, onDelete, onUpdate }) {
  return (
    <div class='todoitem-div' >
      {/* <table class='todoitem-table'>
        <tr>
          <th >Title</th>
          <th>Description</th>
          <th>Assigned To:</th>
          <th>Completed</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>{todo.assignedUser || "None" }</td>
          <td><input type='checkbox' ></input></td>
          <td><button onClick={() => onUpdate(todo)}>Edit</button></td>
          <td><button onClick={() => onDelete(todo.id)}>Delete</button></td>


        </tr>
        

      </table> */}
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Assigned to: {todo.assignedUser || "None"} </p>
      <input type="checkbox"/>
     
       <button onClick={() => onUpdate(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button> 
    </div>
  );
}

export default TodoItem;
