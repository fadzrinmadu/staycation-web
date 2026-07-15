"use client"

import React, { FC } from "react"; 
import clsx from "clsx";
import { useStay } from "./hook";

import { 
  Featured, 
  Footer, 
  Loading, 
  Navbar, 
  StayDetail, 
  Testimony,
} from "@/components/layout";

const Stay: FC = () => {
  const {
    bookingCardData,
    data,
    imageGalleryData,
    pageTitleData,
    sectionParagraphData,
    statsItemData,
    status,
    testimonyData,
    thingsToDoData,
  } = useStay();
  
  if (status === "loading" || !data) return <Loading />;
  
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
          <StayDetail 
            pageTitle={pageTitleData}
            imageGallery={imageGalleryData}
            sectionParagraph={sectionParagraphData}
            statsItems={statsItemData}
            bookingCardData={bookingCardData}
          />
        </section>
        
        {/* Things to do */}
        <section 
          id="thingsToDo" 
          className="w-[1110px] max-w-full m-auto mb-[80px]"
        >
          <Featured
            type="recommended" 
            title="Things to do"
            data={thingsToDoData} 
          />
        </section>
        
        {/* Testimony */}
        <section 
          id="testimonial"
          className="w-[1110px] max-w-full m-auto mb-[100px]"
        >
          <Testimony
            {...testimonyData}
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
