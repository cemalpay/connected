import React, { useEffect, useState } from "react";
import TextComponent from "./components/TextComponent";
import HeaderComponent from "./components/HeaderComponent";

import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

export default function Home() {
  const [homeComponents, setHomeComponents] = useState([]);

  // reorder components with order number from firebase
  const reorderComponents = (components) => {
    const orderedComponents = components.sort((a, b) => a.order - b.order);
    setHomeComponents(orderedComponents);
  };

  // Read components from firebase
  useEffect(() => {
    const q = query(collection(db, "home"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const homeComponents = [];
      querySnapshot.forEach((doc) => {
        homeComponents.push({ ...doc.data(), id: doc.id });
      });
      setHomeComponents(homeComponents);
      reorderComponents(homeComponents);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <h2>Hello World!</h2>
      {/* use case switch */}
      {homeComponents.map((component) => {
        switch (component.name) {
          case "text":
            return (
              <TextComponent key={component.id}>
                {component.content}
              </TextComponent>
            );
          case "header":
            return <HeaderComponent key={component.id} content={component} />;
          default:
            return <p>Component not found</p>;
        }
      })}
    </>
  );
}
