import React from "react";
import Image from "next/image";
import backgroundImg from "@/public/pk4.jpg";
const Home: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src={backgroundImg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default Home;
