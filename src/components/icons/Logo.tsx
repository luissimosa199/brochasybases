import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/assets/logo_50x50.png"
      alt="logo"
      width={24}
      height={24}
    />
  );
};

export default Logo;
