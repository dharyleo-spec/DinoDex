import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DinoCard from "../components/DinoCard";
import Footer from "../components/Footer";

function Home() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [featuredDinosaurs, setFeaturedDinosaurs] = useState([]);

  useEffect(() => {
    fetch("/dinosaurs.json")
      .then((response) => response.json())
      .then((data) => {
        setDinosaurs(data);

        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setFeaturedDinosaurs(shuffled.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error loading dinosaur data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-[1200px] w-[calc(100%-80px)] mx-auto py-[70px] pb-[60px]">

        {/* HERO SECTION */}
        <section
          className="min-h-[500px] rounded-[24px] flex items-center px-[70px] relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/images/others/hero_bg.png')" }}
        >

          <div className="absolute w-[420px] h-[420px] bg-[#537b2f] rounded-full right-[-130px] bottom-[-170px]" />

          <img
            src="/images/others/dino_head.png"
            alt="Dinosaur Fossil"
            className="absolute right-[80px] top-1/2 -translate-y-1/2 w-[350px] opacity-90 z-10 drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]"
          />

          <div className="max-w-[620px] relative z-10">

            <p className="m-0 mb-[15px] text-[#f9b93f] text-[14px] font-bold tracking-[4px]">
              DINODEX
            </p>

            <h1 className="m-0 text-white text-[56px] leading-[1.1] font-extrabold">
              Discover the
              <br />
              <span className="text-[#f9b93f]">
                World of Dinosaurs
              </span>
            </h1>

            <p className="max-w-[500px] my-[25px] text-[#e5eadf] text-[17px] leading-[1.7]">
              Explore fascinating prehistoric creatures,
              learn about their history, and discover the
              dinosaurs that once ruled the Earth.
            </p>

            <Link
              to="/explore"
              className="inline-block px-[22px] py-[13px] bg-[#f2a007] text-white rounded-[8px] text-[15px] font-bold hover:bg-[#d98c00]"
            >
              Explore Dinosaurs
            </Link>

          </div>
        </section>

        {/* FEATURED SECTION */}
        <section className="mt-[80px]">

          <div className="flex items-end justify-between mb-[30px]">
            <div>
              <p className="m-0 mb-[6px] text-[#537b2f] text-[15px] font-bold">
                DISCOVER
              </p>

              <h2 className="m-0 text-[#31572c] text-[32px] font-extrabold">
                Featured Dinosaurs
              </h2>
            </div>

            <Link
              to="/explore"
              className="text-[#537b2f] text-[15px] font-bold hover:text-[#31572c]"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {featuredDinosaurs.map((dinosaur) => (
              <DinoCard
                key={dinosaur.id}
                dinosaur={dinosaur}
              />
            ))}
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Home;