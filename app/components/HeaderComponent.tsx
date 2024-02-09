import React from "react";

export default function HeaderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-white/90 font-bold text-3xl">{children}</h2>;
}
