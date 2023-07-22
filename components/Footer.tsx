import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

//

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start gap-6 ">
        <Image
          src={"./logo.svg"}
          width={118}
          height={18}
          alt="logo2"
          className="object-contain"
        />
        <p className="text-base text-gray-700">
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>
      <div className="flex flex-1 flex-wrap w-full md:justify-end gap-20 max-md:mt-10">
        {footerLinks.map((item) => (
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between gap-3 border-t mt-10 sm:px-16 px-6 py-10">
      <p className="text-base text-gray-700 max-md:text-center">
        @2023 CarHub. All rights reserved
      </p>
      <div className="flex justify-around gap-6 text-gray-500">
        <Link href={"/"}>Privacy & Policy </Link>
        <Link href={"/"}>Terms & Condition </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
