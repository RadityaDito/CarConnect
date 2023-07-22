"use client";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from "@/components";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="flex flex-col p-6 justify-center items-center text-black-100 bg-primary-blue-100 hover:shadow-lg hover:bg-white rounded-3xl group">
      <div className="flex items-start w-full ">
        <h2 className="text-[22px] font-bold leading-[34px] capitalize">
          {make} {model}
        </h2>
      </div>
      <div className="flex w-full items-start mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </div>

      <div className="relative h-40 w-full object-contain my-3">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          className={"object-contain"}
          alt={"cardImage"}
        />
      </div>

      <div className="flex w-full mt-2">
        <div className="flex justify-between items-center gap-2 w-full group-hover:hidden text-grey">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={"/steering-wheel.svg"}
              alt="steer"
              width={20}
              height={20}
            />
            <p className="text-sm">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src={"/tire.svg"} alt="steer" width={20} height={20} />
            <p className="text-sm uppercase">{drive}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src={"/gas.svg"} alt="steer" width={20} height={20} />
            <p className="text-sm">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex items-center justify-center w-full">
          <CustomButton
            title="View More"
            containerStyles="bg-primary-blue w-full py-3 rounded-full"
            textStyles="text-white text-sm font-bold"
            rightIcon="right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        car={car}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
