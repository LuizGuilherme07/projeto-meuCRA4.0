import React from "react";
import Image from "next/image";

export default function LoginImagem() {
  return (
    <div className="ImageLogin">
      <Image
        src="/images/IMAGEMLOGIN.jpg"
        alt="Login Image"
        className="image"  
        layout="responsive"
        width={1080}
        height={1080}
      />
    </div>
  );
}