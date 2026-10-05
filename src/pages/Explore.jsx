import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DinoCard from "../components/DinoCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";

function Explore() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("All");
  const [diet, setDiet] = useState("All");

  useEffect(() => {
    fetch("/dinosaurs.json")
      .then((response) => response.json())
      .then((data) => {
        setDinosaurs(data);
      })
      .catch((error) => {
        console.error("Error loading dinosaur data:", error);
      });
  }, []);

  const filteredDinosaurs = dinosaurs.filter((dinosaur) => {
    const matchesSearch = dinosaur.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPeriod =
      period === "All" || dinosaur.period === period;

    const matchesDiet =
      diet === "All" || dinosaur.diet === diet;

    return matchesSearch && matchesPeriod && matchesDiet;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-[1200px] w-[calc(100%-40px)] md:w-[calc(100%-80px)] mx-auto py-[40px] md:py-[70px] pb-[60px]">

        {/* HEADER */}
        <div
          className="text-center px-[20px] md:px-[30px] py-[35px] md:py-[45px] mb-[30px] md:mb-[40px] rounded-[20px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/others/header_bg.png')" }}
        >
          <p className="m-0 mb-[10px] text-[#f9b93f] text-[13px] font-bold">
            DISCOVER
          </p>

          <h1 className="m-0 text-white text-[32px] md:text-[44px] font-extrabold">
            Explore Dinosaurs
          </h1>

          <span className="block mt-[14px] text-[#e5eadf] text-[14px] md:text-[16px]">
            Discover fascinating dinosaurs from the prehistoric world.
          </span>
        </div>

        {/* SEARCH AND FILTER */}
        <div className="flex flex-col md:flex-row gap-[15px] mb-[40px]">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <FilterBar
            period={period}
            setPeriod={setPeriod}
            diet={diet}
            setDiet={setDiet}
          />

        </div>

        {/* DINOSAUR GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {filteredDinosaurs.map((dinosaur) => (
            <DinoCard
              key={dinosaur.id}
              dinosaur={dinosaur}
            />
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Explore;