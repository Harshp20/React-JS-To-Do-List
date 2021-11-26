import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Todos } from "./Components/Todos";
import { useState } from "react";
import AddToDo from "./Components/AddToDo";

function App() {
  const deleteTodo = (todo) => {
    setItem(item.filter((item) => item !== todo));
  };

  const addToDo = (title, desc) => {
    // let sno;
    // if (item.length === 0) {
    //   sno = 1;
    // } else {
    //   sno = item.length + 1
    // }
    const todo = {
      title: title,
      desc: desc,
    };
    setItem([...item, todo]);
  };
  
  const [item, setItem] = useState(()=>[]);

  const flexContainer = {
    display: "flex",
  };

  const flexChild = {
    flex: "1",
    border: "2px solid yellow",
  };

  return (
    <>
      <Header title="To Do List" dropdown={true} /*dropdown*/ />

      <div className={flexContainer}>
        <AddToDo addToDo={addToDo} className={flexChild} />
        <Todos className={flexChild} todo={item} deleteTodo={deleteTodo} />
      </div>

      <Footer />
    </>
  );
}

export default App;
