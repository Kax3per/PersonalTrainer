import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // 🔥 POPRAWIONY SCROLL SPY (NAJWAŻNIEJSZE)
  useEffect(() => {
    const sections = ["home", "trainer", "offer", "transformation", "pricing"];

    const handleScroll = () => {
      const middle = window.innerHeight * 0.4;

      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= middle && rect.bottom >= middle) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SCROLL
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Trainer", id: "trainer" },
    { name: "Our Way", id: "offer" },
    { name: "Transformations", id: "transformation" }, // 🔥 FIX
    { name: "Shop", id: "pricing" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-6 md:px-10 py-5
        bg-white/60 backdrop-blur-xl
        border-b border-blue-100
        shadow-[0_8px_30px_rgba(37,99,235,0.15)]
      ">
        
        <div className="text-lg font-bold tracking-wide">
          <span className="text-black">YOUR</span>{" "}
          <span className="text-blue-600">BRAND</span>
        </div>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">

          {links.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative cursor-pointer transition

                ${active === item.id
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
                }
              `}
            >
              {item.name}

              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-blue-600
                  transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0"}
                `}
              ></span>
            </a>
          ))}

        </nav>

        {/* MOBILE */}
        <button 
          onClick={() => setOpen(true)} 
          className="md:hidden text-2xl text-blue-600"
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
          className="absolute top-6 right-6 text-3xl"
        >
          ✕
        </button>

        <div className="flex flex-col gap-10 text-4xl font-bold">

          {links.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                cursor-pointer transition
                ${active === item.id ? "text-blue-400" : ""}
              `}
            >
              {item.name}
            </a>
          ))}

        </div>
      </div>
    </>
  );
}