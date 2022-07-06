import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todo, deleteTodo }) => {
  return (
    <div className='text-center'> 
      {todo.length === 0
        ? <h3 style={{margin: '20px'}}>To Do List Empty </h3>
      :
      todo.map((todo) => {
        return (
          <div key={todo.sno}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
            <br />
          </div>
        );
      })}
    </div>
  );
};
