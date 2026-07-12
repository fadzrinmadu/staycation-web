"use client";

import React, { FC } from "react";

import {
  Featured,
  Footer,
  Hero,
  Loading,
  Navbar,
  Testimony,
} from "@/components/layout";

import { useHome } from "./hook";

const Home: FC = () => {
  const { 
    landingPage,
    mostPickedData,
    statsItemsHero,
    status,
    testimonialData,
    getHouseWithBakyardData,
  } = useHome();

  if (status === "loading" || !landingPage) return <Loading />;

  return (
    <>
      <header
        id="header"
        className="border-b border-b-[#E5E5E5] px-6 mb-[80px]"
      >
        <nav id="navbar" className="w-[1110px] max-w-full m-auto">
          <Navbar />
        </nav>
      </header>

      <main className="px-6">
        <section id="hero" className="w-[1110px] max-w-full m-auto mb-[80px]">
          <Hero statsItems={statsItemsHero} />
        </section>

        <section id="mostPicked" className="w-[1110px] max-w-full m-auto mb-[80px]">
          <Featured type="highlight" title="Most picked" data={mostPickedData} />
        </section>
        
        {landingPage.category.map((category) => (
          <section 
            key={category._id || ""}
            id={`${category._id || ""}`} 
            className="w-[1110px] max-w-full m-auto mb-[80px]"
          >
            <Featured 
              type="recommended" 
              title={category.name || ""} 
              data={getHouseWithBakyardData(category.itemId || [])} 
            />
          </section>
        ))}

        <section id="testimonial" className="w-[1110px] max-w-full m-auto mb-[100px]">
          <Testimony
            image={testimonialData.imagePath}
            title={testimonialData.name}
            rating={testimonialData.rate}
            quote={testimonialData.content}
            author={`${testimonialData.familyName}, ${testimonialData.familyOccupation}`}
            onReadStory={() => console.log("Read story")}
          />
        </section>
      </main>

      <footer id="footer" className="border-t border-t-[#E5E5E5] py-[50px]">
        <nav className="w-[1110px] max-w-full m-auto mb-[80px] px-6">
          <Footer />
        </nav>
      </footer>
    </>
  );
};

export default Home;
