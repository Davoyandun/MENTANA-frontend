import React from "react";
import Navbar from "@/shared/components/navbar/navbar";
import Banner from "@/shared/components/landing/Banner/banner";
import StepToUse from "@/shared/components/landing/StepToUse/stepToUse";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex bg-whiteSmokeBase min-h-screen flex-col items-center justify-start lg:mt-[100px] mt-[80px] overflow-x-hidden">
        <div className="bannerWrapper flex flex-row md:mt-24 mt-4  justify-center mb-28 md:mb-0">
          <Banner />
        </div>
        <div className="w-full min-h-screen">
          <StepToUse />
        </div>
      </main>
    </>
  );
}
