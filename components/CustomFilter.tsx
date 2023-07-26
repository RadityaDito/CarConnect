"use client";

import { useRouter } from "next/navigation";
import { CustomFilterProps } from "@/types";
import React from "react";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(
      title.toLowerCase(),
      e.value.toLowerCase()
    );

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="relative w-full flex justify-between items-center min-w-[127px] shadow-md rounded-lg px-3 py-2 cursor-default bg-white border sm:text-sm">
            <span className="block truncate">{selected.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              alt={"custom-filter"}
              width={20}
              height={20}
              className=""
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute bg-white mt-1 py-1 overflow-auto w-full max-h-60 rounded-lg shadow-md">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative py-2 px-4 select-none cursor-default ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium " : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
