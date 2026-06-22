import { Navbar } from "@/components/layout";
import React, { FC } from "react";

const Stay: FC = () => {
  return (
    <>
      <header 
        id="header" 
        className="border-b border-b-[#E5E5E5] px-6 mb-[80px]"
      >
        {/* Navbar */}
        <nav 
          id="navbar" 
          className="w-[1110px] max-w-full m-auto"
        >
          <Navbar />
        </nav>
      </header>
      
      <main className="px-6">
        <h1>Details Page</h1>
      </main>
    </>
  );
};

export default Stay;
