import Todo from "./Todo";
import React, { useEffect, useState } from "react";

import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //Create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a to-do");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todos);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  // Delete todo from firebase
  return (
    <>
      <div className="h-screen w-screen p-4 bg-black/90 ">
        <div className="text-white flex flex-col gap-4">
          <h3>To-do App</h3>
          <form onSubmit={createTodo}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add a to-do"
              className="border-white border px-4 text-black"
            />
            <button className="border-white border px-4" type="submit">
              + Add
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} toggleComplete={toggleComplete} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
