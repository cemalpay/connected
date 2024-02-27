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
      setComponents(reOrderComponents(components));
    });
    return () => {
      unsubscribe();
    };
  }, [selectedPage]);

  //console log
  console.log(components);

  const reOrderComponents = (components) => {
    return components.sort((a, b) => a.order - b.order);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="bg-main] w-64 h-screen p-4">
        <div>
          <h1 className="text-3xl font-bold">Admin</h1>
        </div>
        <div className="flex flex-col mt-6">
          <ul className="gap-4 flex flex-col">
            <li>
              <button onClick={() => setSelectedPage("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => setSelectedPage("about")}>About</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-black h-full bg-secondary flex items-center justify-center">
        <div>
          <ul className="flex flex-col gap-4">
            {components.map((component) => {
              return (
                <li
                  key={component.id}
                  className="w-96 border border-solid border-black bg-primary shadow-md rounded-md flex items-center gap-6 px-4"
                >
                  <span className="text-red-500 w-6 h-6 flex items-center justify-center">
                    {component.order}
                  </span>
                  <div>
                    <h2 className="text-xl">{component.name}</h2>
                    {component.content}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
