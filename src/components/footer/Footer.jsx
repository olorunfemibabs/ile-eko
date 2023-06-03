import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center h-[50px] justify-between text-sm">
      <div>©2023 Ile-Eko. All rights reserved.</div>
      <div className="flex items-center gap-3">
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="Ile-EKo"
          className="relative opacity-60 cursor-pointer"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          alt="Ile-EKo"
          className="relative opacity-60 cursor-pointer"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          alt="Ile-EKo"
          className="relative opacity-60 cursor-pointer"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          alt="Ile-EKo"
          className="relative opacity-60 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
