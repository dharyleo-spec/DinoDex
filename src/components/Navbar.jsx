import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="w-full min-h-[75px] bg-[#264a23] border-b-[3px] border-[#f9b93f]">

      {/* MAIN NAVBAR */}
      <div className="h-[75px] flex items-center justify-between px-[20px] md:px-[50px]">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-[10px] text-white no-underline"
        >
          <img
            src="/images/others/dino_head.png"
            alt="DinoDex"
            className="w-[42px] h-[42px] object-contain drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]"
          />

          <div>
            <h1 className="m-0 text-[24px] leading-none font-extrabold">
              DinoDex
            </h1>

            <p className="m-0 mt-[4px] text-[#f9d98c] text-[9px] font-bold tracking-[2px]">
              PREHISTORIC WORLD
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-[8px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-[18px] py-[9px] rounded-[8px] text-[14px] font-bold no-underline transition-all ${
                  isActive
                    ? "bg-[#f9b93f] text-[#264a23]"
                    : "text-white hover:bg-[#31572c] hover:text-[#f9d98c]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-[42px] h-[42px] rounded-[8px] bg-transparent border-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-[24px] h-[3px] bg-white rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>

          <span
            className={`block w-[24px] h-[3px] bg-white rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`block w-[24px] h-[3px] bg-white rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-[20px] pb-[15px]">
          <div className="flex flex-col gap-[6px]">

            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full px-[18px] py-[12px] rounded-[8px] text-[14px] font-bold no-underline transition-all ${
                    isActive
                      ? "bg-[#f9b93f] text-[#264a23]"
                      : "text-white hover:bg-[#31572c] hover:text-[#f9d98c]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;