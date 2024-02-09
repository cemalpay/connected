import React from "react";

export default function HeaderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-emerald-950 text-3xl">{children}</h2>;
}
