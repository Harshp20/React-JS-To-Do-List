import React, { useState } from "react";
import { Card } from "react-bootstrap";

const AddToDo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const titleHandler = (event) => setTitle(event.target.value);
  const descHandler = (event) => setDesc(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("adnasno");
    props.addToDo(title, desc);
  };

  const cardStyles = {
    margin: "0 auto",
    float: "none",
    marginBottom: "10px",
    width: "18rem",
    padding: "20px",
    marginTop: "20px",
    border: '2px dashed green'
  };
  return (
    <>
    <h2 className="text-center">To Do List</h2>
    <Card style={cardStyles} className='text-center'>
      <h3>Add Item To Your To Do List</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={titleHandler}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            cols="1" rows='5'
            value={desc}
            onChange={descHandler}
            className="form-control"
            id="desc"
            required
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Item
        </button>
      </form>
    </Card>
    </>
  );
};

export default AddToDo;
