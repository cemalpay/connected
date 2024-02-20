"use client";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

export default function AdminPanel() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, `${selectedPage}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const components = [];
      querySnapshot.forEach((doc) => {
        components.push({ ...doc.data(), id: doc.id });
      });
      setComponents(components);
    });
    return () => {
      unsubscribe();
    };
  }, [selectedPage]);

  //console log
  console.log(components);

  return (
    <div className="w-screen h-screen bg-red-500 flex">
      <div className="bg-black/90 w-64 h-screen p-4">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <div className="flex flex-col mt-6">
          <ul className="gap-4 flex flex-col">
            <li>
              <button onClick={() => setSelectedPage("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => setSelectedPage("todos")}>About</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full bg-slate-200">
        {/* write json here */}
        {components.map((component) => (
          <div className="p-4" key={component.id}>
            <h1 className="text-3xl font-bold">{component.name}</h1>
            <p>{component.content}</p>
            <p>{component.order}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
