import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from "@/components";

const Navbar = () => {
  return (
    <header className="z-10 w-full absolute">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
        <Link href={"/"}>
          <Image src={"./logo.svg"} width={118} height={18} alt="logo" />
        </Link>
        <CustomButton
          title="Sign in"
          textStyles="text-blue-600"
          containerStyles="bg-white rounded-full min-w-[120px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
