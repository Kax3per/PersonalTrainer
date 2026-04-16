import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // 🔥 SCROLL FUNCTION
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = 90; // dopasuj jak trzeba

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="
        sticky top-0 z-40
        flex items-center justify-between
        px-6 md:px-10 py-5
        bg-white/70 backdrop-blur-md
        border-b border-gray-200
      ">
        
        {/* LOGO */}
        <div className="text-lg font-bold tracking-wide">
          <span className="text-black">YOUR</span>{" "}
          <span className="text-blue-600">BRAND</span>
        </div>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">

          <a onClick={() => scrollToSection("trainer")} className="relative group cursor-pointer">
            Trainer
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </a>

          <a onClick={() => scrollToSection("offer")} className="relative group cursor-pointer">
            Our Way
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </a>

          <a onClick={() => scrollToSection("transformation")} className="relative group cursor-pointer">
            Transformations
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </a>

          <a onClick={() => scrollToSection("pricing")} className="relative group cursor-pointer">
            Shop
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </a>

        </nav>

        {/* MOBILE BUTTON */}
        <button 
          onClick={() => setOpen(true)} 
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-50
          flex flex-col items-center justify-center
          bg-black text-white
          transition-transform duration-500
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-3xl hover:rotate-90 transition"
        >
          ✕
        </button>

        <div className="flex flex-col gap-10 text-4xl font-bold">

          <a onClick={() => scrollToSection("trainer")} className="hover:text-blue-400 cursor-pointer">
            Trainer
          </a>

          <a onClick={() => scrollToSection("offer")} className="hover:text-blue-400 cursor-pointer">
            Our Way
          </a>

          <a onClick={() => scrollToSection("transformation")} className="hover:text-blue-400 cursor-pointer">
            Transformations
          </a>

          <a onClick={() => scrollToSection("pricing")} className="hover:text-blue-400 cursor-pointer">
            Shop
          </a>

        </div>

        <p className="absolute bottom-10 text-sm text-gray-400">
          Transform your body. Build your mindset.
        </p>

      </div>
    </>
  );
}