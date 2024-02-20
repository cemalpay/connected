import React from "react";
import TodoPage from "./TodoPage";
function Home() {
  return (
    <>
      <div className="h-screen w-screen p-4 bg-black/90 ">
        <TodoPage />
      </div>
    </>
  );
}

export default Home;
