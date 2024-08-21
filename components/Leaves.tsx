import Image from "next/image";
import React from "react";

const Leaves = () => {
  return (
    <div className="h-full w-full absolute">
      <Image src="/leaves.png" fill alt="Leaves" className="object-cover" />
    </div>
  );
};

export default Leaves;
