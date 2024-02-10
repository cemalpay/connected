import Todo from "./Todo";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn TypeScript",
    "Learn Redux",
  ]);

  return (
    <>
      <div className="h-screen w-screen p-4 bg-black/90 ">
        <div className="text-white flex flex-col gap-4">
          <h3>To-do App</h3>
          <form>
            <input type="text" placeholder="Add a to-do" />
            <button className="border-white border px-4" type="submit">
              + Add
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
