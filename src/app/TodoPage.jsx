"use client";
import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { db } from "../utils/firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

export default function TodoPage() {
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
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
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
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
