import React from "react";

export default function TextComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-black">{children}</p>;
}
