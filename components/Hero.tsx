import React from "react";
import { CustomButton } from "@/components";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!{" "}
        </h1>
        <h3 className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </h3>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-600 px-3 py-2 rounded-full mt-8"
          textStyles="text-white"
        />
      </div>
      <div className="flex-[1.5] xl:pt-36">
        <div className="flex justify-center xl:justify-end">
          <Image src={"/hero.png"} alt={"hero"} width={780} height={500} />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
    // <div className="hero ">
    //   <div className="flex-1 pt-36 padding-x">
    //     <h1 className="hero__title">
    //       Find, book, rent a car—quick and super easy!{" "}
    //     </h1>
    //     <h3 className="hero__subtitle">
    //       Streamline your car rental experience with our effortless booking
    //       process.
    //     </h3>
    //     <CustomButton
    //       title="Explore Cars"
    //       containerStyles="bg-blue-600 px-3 py-2 rounded-full mt-8"
    //       textStyles="text-white"
    //     />
    //   </div>
    //   <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen ">
    //     <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
    //       <Image src="/hero.png" alt="hero" fill className="object-contain" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
