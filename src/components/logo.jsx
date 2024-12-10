import React from "react";
import Image from "next/image";

export default function Logo({ width = 120, height = 120, className = "" }) {
  return (
    <Image
      src="/images/MEUCRALOGO.jpg"
      alt="Logo MeuCRA"
      width={width}
      height={height}
      className={className}
    />
  );
}