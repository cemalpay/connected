import React from "react";

export default function HeaderComponent({ content }) {
  console.log("content", content);
  return <h2 className="text-2xl text-blue-500">{content.content}</h2>;
}
