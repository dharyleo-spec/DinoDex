import { Link } from "react-router-dom";

function DinoCard({ dinosaur }) {

  return (
    <div className="w-full bg-white rounded-[18px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.15)]">

      <div
        className="w-full h-[220px] sm:h-[240px] md:h-[250px] lg:h-[280px] flex items-end justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/others/card_bg.png')" }}
      >
        <img
          src={dinosaur.cardImage || dinosaur.image}
          alt={dinosaur.name}
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="p-[24px]">

        <h2 className="m-0 mb-[12px] text-[24px] font-bold text-[#111827]">
          {dinosaur.name}
        </h2>

        <div className="flex gap-[8px] mb-[20px]">
          <p className="m-0 px-[11px] py-[5px] rounded-[18px] bg-[#e8f0df] text-[#537b2f] text-[11px] font-bold">
            {dinosaur.period}
          </p>

          <p className="m-0 px-[11px] py-[5px] rounded-[18px] bg-[#fff0c7] text-[#a66b00] text-[11px] font-bold">
            {dinosaur.diet}
          </p>
        </div>

        <Link
          to={`/details/${dinosaur.id}`}
          className="inline-block px-[17px] py-[10px] bg-[#537b2f] text-white rounded-[8px] text-[15px] font-semibold hover:bg-[#31572c]"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default DinoCard;