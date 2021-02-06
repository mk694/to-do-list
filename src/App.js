import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [tab, setTab] = useState([]);
  useEffect(() => {
    newTab();
  }, []);
  const newTab = () => {
    const newTab = [1];
    const numberAdd = tab.concat(newTab);
    setTab(numberAdd);
    console.log(tab);
  };

  return (
    <div className="row">
      {tab.map((x, i) => {
        return x === 1 ? (
          <div className="todo-app" key={i}>
            <h1> {i + 1}</h1> <TodoList />
          </div>
        ) : (
          <div className="todo-app" key={i}>
            <h1> {i}</h1> <TodoList />
          </div>
        );
      })}

      <button className="button" onClick={newTab}>
        +
      </button>
    </div>
  );
}

export default App;
