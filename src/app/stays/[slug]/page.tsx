import React, { FC } from "react";
import clsx from "clsx";

import { thingsToDo } from "@/components/layout/Featured/data";

import { 
  Featured, 
  Footer, 
  Navbar, 
  StayDetail, 
  Testimony,
} from "@/components/layout";
import { TestimonyExample2 } from "@/assets/images/examples/testimony";

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
        <section 
          id="stayDetail" 
          className={clsx("w-[1110px] max-w-full m-auto mb-[80px]")}
        >
          <StayDetail />
        </section>
        
        {/* Things to do */}
        <section 
          id="thingsToDo" 
          className="w-[1110px] max-w-full m-auto mb-[80px]"
        >
          <Featured
            type="recommended" 
            title="Things to do"
            data={thingsToDo} 
          />
        </section>
        
        {/* Testimony */}
        <section 
          id="testimonial"
          className="w-[1110px] max-w-full m-auto mb-[100px]"
        >
          <Testimony
            image={TestimonyExample2}
            title="Happy Family"
            rating={5}
            quote="As a wife i can pick a great trip with my own lovely family ... thank you!"
            author="Ann, Product Designer"
            onReadStory={() => console.log("Read story")}
          />
        </section>
      </main>
    
      {/* Footer */}
      <footer
        id="footer"
        className="border-t border-t-[#E5E5E5] py-[50px]"
      >
        <nav className="w-[1110px] max-w-full m-auto mb-[80px] px-6">
          <Footer />
        </nav>
      </footer>
    </>
  );
};

export default Stay;
