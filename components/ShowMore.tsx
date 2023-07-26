"use client";

import { ShowMoreProps } from "@/types";
import React from "react";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ isNext, pageNumber }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newUrl = updateSearchParams("limit", newLimit.toString());

    router.push(newUrl);
  };

  return (
    <div className="w-full flex justify-center items-center mt-10 ">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
