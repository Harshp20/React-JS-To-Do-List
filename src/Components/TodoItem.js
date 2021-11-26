import React from "react";
import Button from "@restart/ui/esm/Button";

export const TodoItem = ({todo, deleteTodo}) => {
  return (
    <div className='container' style={{marginTop: '20px'}}>
      {/* {todo.sno}  */}
    <h5>{todo.title}</h5>
    <p> {todo.desc} </p>
    <Button className="btn btn-danger" onClick={ () => deleteTodo(todo) }>Delete</Button>
    </div>
  )
};
