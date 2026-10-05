import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] w-[calc(100%-80px)] mx-auto py-[70px] pb-[60px]">

        {/* INTRO */}
        <section className="grid grid-cols-2 gap-[60px] items-center mb-[80px] max-[900px]:grid-cols-1">

          {/* INTRO TEXT */}
          <div>
            <p className="m-0 mb-[12px] text-[#537b2f] text-[13px] font-bold">
              WHAT IS DINODEX ABOUT?
            </p>

            <h1 className="m-0 text-[#31572c] text-[52px] leading-[1.1] font-extrabold">
              Step Into the
              <br />
              <span className="text-[#31572c]">
                Prehistoric World
              </span>
            </h1>

            <p className="max-w-[500px] mt-[25px] mb-0 text-[#31572c] text-[17px] leading-[1.8]">
              DinoDex is a dinosaur catalog created to make exploring
              prehistoric life simple, engaging, and informative.
            </p>
          </div>

          {/* IMAGE CARD */}
          <div
            className="min-h-[380px] rounded-[30px] flex items-center justify-center relative overflow-hidden bg-cover bg-center shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
            style={{
              backgroundImage: "url('/images/others/about_bg.png')",
            }}
          >

            {/* CIRCLES */}
            <div className="absolute w-[280px] h-[280px] bg-[#537b2f] rounded-full top-[-80px] right-[-70px]" />

            <div className="absolute w-[220px] h-[220px] bg-[#f9b93f] rounded-full bottom-[-100px] left-[-70px]" />

            {/* LOGO */}
            <div className="relative z-10 text-center">
              <img
                src="/images/others/dino_head.png"
                alt="DinoDex Logo"
                className="w-[210px] h-auto mx-auto object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.3)]"
              />

              <p className="m-0 mt-[5px] text-[#f9b93f] text-[14px] font-bold tracking-[4px]">
                DINODEX
              </p>
            </div>

          </div>

        </section>

        {/* ABOUT CONTENT */}
        <section className="grid grid-cols-3 gap-[25px] max-[900px]:grid-cols-1">

          {/* EXPLORE */}
          <div className="bg-white rounded-[18px] p-[30px] border-t-[5px] border-[#f2a007]">
            <p className="m-0 mb-[10px] text-[#a66b00] text-[12px] font-bold tracking-[2px]">
              EXPLORE
            </p>

            <h2 className="m-0 mb-[15px] text-[#31572c] text-[24px] font-extrabold">
              Discover Dinosaurs
            </h2>

            <p className="m-0 text-[#667085] text-[15px] leading-[1.7]">
              Browse different dinosaur species and discover information
              about their characteristics, periods, and diets.
            </p>
          </div>

          {/* LEARN */}
          <div className="bg-white rounded-[18px] p-[30px] border-t-[5px] border-[#f2a007]">
            <p className="m-0 mb-[10px] text-[#a66b00] text-[12px] font-bold tracking-[2px]">
              LEARN
            </p>

            <h2 className="m-0 mb-[15px] text-[#31572c] text-[24px] font-extrabold">
              Learn Their History
            </h2>

            <p className="m-0 text-[#667085] text-[15px] leading-[1.7]">
              Learn about the prehistoric world and the fascinating creatures
              that once lived on Earth.
            </p>
          </div>

          {/* DISCOVER */}
          <div className="bg-white rounded-[18px] p-[30px] border-t-[5px] border-[#f2a007]">
            <p className="m-0 mb-[10px] text-[#a66b00] text-[12px] font-bold tracking-[2px]">
              DISCOVER
            </p>

            <h2 className="m-0 mb-[15px] text-[#31572c] text-[24px] font-extrabold">
              Find Your Favorite
            </h2>

            <p className="m-0 text-[#667085] text-[15px] leading-[1.7]">
              Search and filter the collection to quickly find dinosaurs
              that interest you.
            </p>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;