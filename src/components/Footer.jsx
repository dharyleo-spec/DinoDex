function Footer() {
  return (
    <footer className="mt-[80px] bg-[#8b5e3c] text-white border-t-[5px] border-[#f9b93f]">

      <div className="max-w-[1200px] w-[calc(100%-80px)] mx-auto py-[45px]">

        <div className="grid grid-cols-2 gap-[50px] max-[700px]:grid-cols-1">

          {/* BRAND */}
          <div>
            <h2 className="m-0 text-[28px] font-extrabold">
              DinoDex
            </h2>

            <p className="max-w-[400px] m-0 mt-[10px] text-[#f5e8d5] text-[14px] leading-[1.7]">
              Explore the prehistoric world and discover fascinating
              dinosaurs from Earth's ancient past.
            </p>
          </div>

          {/* PROJECT CREATORS */}
          <div>
            <p className="m-0 mb-[15px] text-[#f9b93f] text-[12px] font-bold tracking-[3px]">
              PROJECT CREATORS
            </p>

            <div className="grid grid-cols-3 gap-[15px] max-[700px]:grid-cols-1">

              <div className="bg-[#70482f] rounded-[10px] px-[15px] py-[13px]">
                <p className="m-0 text-[14px] font-bold">
                  Dharyll Badua
                </p>
              </div>

              <div className="bg-[#70482f] rounded-[10px] px-[15px] py-[13px]">
                <p className="m-0 text-[14px] font-bold">
                  Robie Jemuel Tan
                </p>
              </div>

              <div className="bg-[#70482f] rounded-[10px] px-[15px] py-[13px]">
                <p className="m-0 text-[14px] font-bold">
                  Mery Grace Ferrer
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-[35px] pt-[20px] border-t border-[#a87854] flex items-center justify-between max-[700px]:flex-col max-[700px]:gap-[8px]">

          <p className="m-0 text-[#f5e8d5] text-[12px]">
            INTECH 3112
          </p>

          <p className="m-0 text-[#f5e8d5] text-[12px]">
            © 2026 DinoDex. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;