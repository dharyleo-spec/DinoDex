import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock3, Globe2, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Details() {
  const { id } = useParams();

  const [dinosaur, setDinosaur] = useState(null);

  useEffect(() => {
    fetch("/dinosaurs.json")
      .then((response) => response.json())
      .then((data) => {
        const foundDinosaur = data.find(
          (dino) => String(dino.id) === String(id)
        );

        setDinosaur(foundDinosaur);
      })
      .catch((error) => {
        console.error("Error loading dinosaur:", error);
      });
  }, [id]);

  if (!dinosaur) {
    return (
      <div className="min-h-screen">
        <Navbar />

        <main className="max-w-[1200px] w-[calc(100%-80px)] mx-auto py-[70px] pb-[60px]">
          <p>Loading dinosaur...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-[1200px] w-[calc(100%-80px)] mx-auto py-[50px] pb-[60px]">

        {/* BACK BUTTON */}
        <Link
          to="/explore"
          className="inline-flex items-center gap-[7px] mb-[25px] text-[#537b2f] text-[15px] font-semibold hover:text-[#31572c]"
        >
          <ArrowLeft size={18} />
          Back to Explore
        </Link>

        {/* DETAILS CARD */}
        <div className="grid grid-cols-2 min-h-[500px] bg-white rounded-[20px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.15)] max-[900px]:grid-cols-1">

          {/* LEFT - DINOSAUR */}
          <div className="bg-[#f9b93f] flex items-center justify-center p-[30px]">
            <img
              src={dinosaur.image}
              alt={dinosaur.name}
              className="w-full h-[460px] object-contain object-center"
            />
          </div>

          {/* RIGHT - INFORMATION */}
          <div className="flex flex-col justify-center p-[55px] max-[600px]:p-[35px]">

            {/* NAME */}
            <h1 className="m-0 mb-[15px] text-[#31572c] text-[42px] leading-[1.1] font-extrabold max-[600px]:text-[34px]">
              {dinosaur.name}
            </h1>

            {/* TIME PERIOD AND DIET */}
            <div className="flex flex-wrap gap-[8px] mb-[25px]">

              <div className="flex items-center gap-[6px] px-[11px] py-[5px] rounded-[18px] bg-[#e8f0df] text-[#537b2f] text-[11px] font-bold">
                <Clock3 size={13} />
                {dinosaur.period}
              </div>

              <p className="m-0 px-[11px] py-[5px] rounded-[18px] bg-[#fff0c7] text-[#a66b00] text-[11px] font-bold">
                {dinosaur.diet}
              </p>

            </div>

            {/* DESCRIPTION */}
            <p className="max-w-[500px] m-0 mb-[30px] text-[#667085] text-[16px] leading-[1.8]">
              {dinosaur.description}
            </p>

            {/* ADDITIONAL INFORMATION */}
            <div className="space-y-[20px]">

              {/* TIME PERIOD */}
              <div className="flex gap-[14px]">
                <div className="w-[40px] h-[40px] shrink-0 rounded-[10px] bg-[#e8f0df] flex items-center justify-center text-[#537b2f]">
                  <Clock3 size={20} />
                </div>

                <div>
                  <h3 className="m-0 mb-[4px] text-[#31572c] text-[14px] font-bold">
                    Time Period
                  </h3>

                  <p className="m-0 text-[#667085] text-[14px] leading-[1.5]">
                    {dinosaur.timePeriod}
                  </p>
                </div>
              </div>

              {/* ORIGIN OF NAME */}
              <div className="flex gap-[14px]">
                <div className="w-[40px] h-[40px] shrink-0 rounded-[10px] bg-[#fff0c7] flex items-center justify-center text-[#a66b00]">
                  <BookOpen size={20} />
                </div>

                <div>
                  <h3 className="m-0 mb-[4px] text-[#31572c] text-[14px] font-bold">
                    Origin of Name
                  </h3>

                  <p className="m-0 text-[#667085] text-[14px] leading-[1.5]">
                    {dinosaur.originOfName}
                  </p>
                </div>
              </div>

              {/* GLOBAL PRESENCE */}
              <div className="flex gap-[14px]">
                <div className="w-[40px] h-[40px] shrink-0 rounded-[10px] bg-[#e8f0df] flex items-center justify-center text-[#537b2f]">
                  <Globe2 size={20} />
                </div>

                <div>
                  <h3 className="m-0 mb-[4px] text-[#31572c] text-[14px] font-bold">
                    Global Presence
                  </h3>

                  <p className="m-0 text-[#667085] text-[14px] leading-[1.5]">
                    {dinosaur.globalPresence}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </main>

      <Footer/>
    </div>
  );
}

export default Details;