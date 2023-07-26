import { CarCard, Hero } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;

  return (
    <div className="">
      <Hero />

      <div
        className="mt-16 max-w-[1440px] mx-auto py-4 px-6 sm:px-16"
        id="discover"
      >
        <div className="flex flex-col gap-y-2.5">
          <h2 className="font-extrabold text-4xl items-start justify-start text-black-100">
            Car Catalogue
          </h2>
          <p className="">Explore out cars you might like</p>
        </div>
        <div className="flex justify-between items-center mt-12 flex-wrap gap-5">
          <SearchBar />

          <div className="flex gap-2 items-center ">
            <CustomFilter title="Fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full pt-12 gap-8">
              {allCars.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center mt-16 flex flex-col gap-2">
            <h2 className="font-bold text-black text-xl">Oops, no results</h2>
            <p>{allCars?.message ? allCars.message : "Too Many Request"}</p>
          </div>
        )}
      </div>
    </div>
  );
}
