import React from "react";
import Image from "next/image";

export default function ImageComponent({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div>
      <Image src={src} alt={alt} width={480} height={480} />
    </div>
  );
}
