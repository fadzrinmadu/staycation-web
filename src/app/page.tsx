import React from "react";

import { 
  Featured, 
  Footer, 
  Hero, 
  Navbar, 
  Testimony,
} from "@/components/layout";

import { 
  apartmentsWithKitchenSet,
  hotelsWithLivingRoom,
  houseWithBakyardData, 
  mostPickedData, 
} from "@/components/layout/Featured/data";

const Home: React.FC = () => {
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
        {/* Hero */}
        <section 
          id="hero" 
          className="w-[1110px] max-w-full m-auto mb-[80px]"
        >
          <Hero />
        </section>
        
        {/* Most Picked */}
        <section 
          id="mostPicked"
          className="w-[1110px] max-w-full m-auto mb-[80px]"
        >
          <Featured 
            type="highlight" 
            title="Most picked"
            data={mostPickedData} 
          />
        </section>
        
        {/* House With Backyard */}
        <section 
          id="houseWithBackyard" 
          className="w-[1110px] max-w-full m-auto mb-[80px]"
        >
          <Featured 
            type="recommended" 
            title="Houses with backyard"
            data={houseWithBakyardData} 
          />
        </section>
        
        {/* Hotels With Living Room */}
        <section 
          id="hotelsWithLivingRoom" 
          className="w-[1110px] max-w-full m-auto mb-[80px]"
        >
          <Featured 
            type="recommended" 
            title="Hotels with living room"
            data={hotelsWithLivingRoom} 
          />
        </section>
        
        {/* Apartments With Kitchen Set */}
        <section 
          id="apartmentsWithKitchenSet" 
          className="w-[1110px] max-w-full m-auto mb-[100px]"
        >
          <Featured 
            type="recommended" 
            title="Apartments with kitchen set"
            data={apartmentsWithKitchenSet} 
          />
        </section>
        
        {/* Testimony */}
        <section 
          id="testimonial"
          className="w-[1110px] max-w-full m-auto mb-[100px]"
        >
          <Testimony />
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
}

export default Home;
