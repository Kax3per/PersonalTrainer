import { useState, useEffect } from "react";

/**
 * Navbar Component (Scroll Spy + Mobile Menu)
 * --------------------------------------------
 * Responsibilities:
 * - Handle navigation across page sections
 * - Track active section based on scroll position (scroll spy)
 * - Control mobile fullscreen menu
 * - Prevent background scrolling when menu is open
 *
 * UX Concepts:
 * - Smooth scrolling navigation
 * - Active link highlighting
 * - Mobile-first fullscreen navigation overlay
 */
export default function Navbar() {

  /**
   * Mobile menu state
   * true  -> menu open
   * false -> menu closed
   */
  const [open, setOpen] = useState(false);

  /**
   * Active section identifier
   * Used for scroll spy highlighting
   */
  const [active, setActive] = useState("home");

  /**
   * BODY SCROLL LOCK
   * -----------------
   * Disables background scrolling when mobile menu is open
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /**
   * SCROLL SPY (CORE LOGIC)
   * ------------------------
   * Determines which section is currently in view.
   *
   * Strategy:
   * - Uses a "middle viewport line" (40% height)
   * - Checks which section intersects this line
   * - Updates active navigation item
   */
  useEffect(() => {

    /**
     * List of section IDs in DOM order
     */
    const sections = ["home", "trainer", "offer", "transformation", "pricing"];

    const handleScroll = () => {

      /**
       * Reference line inside viewport
       * Improves stability vs top-based detection
       */
      const middle = window.innerHeight * 0.4;

      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        /**
         * Check if section crosses reference line
         */
        if (rect.top <= middle && rect.bottom >= middle) {
          current = id;
        }
      });

      /**
       * Update active state
       */
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    /**
     * Initial call to set correct state on load
     */
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * SCROLL TO SECTION
   * -------------------
   * Smooth scroll with offset (for fixed navbar)
   */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    /**
     * Offset to prevent overlap with fixed navbar
     */
    const yOffset = -90;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    /**
     * Close mobile menu after navigation
     */
    setOpen(false);
  };

  /**
   * Navigation links configuration
   */
  const links = [
    { name: "Home", id: "home" },
    { name: "Trainer", id: "trainer" },
    { name: "Our Way", id: "offer" },
    { name: "Transformations", id: "transformation" },
    { name: "Shop", id: "pricing" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-6 md:px-10 py-5
        bg-white/60 backdrop-blur-xl
        border-b border-blue-100
        shadow-[0_8px_30px_rgba(37,99,235,0.15)]
      ">
        
        {/* LOGO / BRAND */}
        <div className="text-lg font-bold tracking-wide">
          <span className="text-black">Personal</span>{" "}
          <span className="text-blue-600">Trainer</span>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">

          {links.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}

              /**
               * Active link styling:
               * - Color highlight
               * - Animated underline
               */
              className={`
                relative cursor-pointer transition

                ${active === item.id
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
                }
              `}
            >
              {item.name}

              {/* UNDERLINE INDICATOR */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5 bg-blue-600
                  transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0"}
                `}
              ></span>
            </a>
          ))}

        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button 
          onClick={() => setOpen(true)} 
          className="md:hidden text-2xl text-blue-600"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-50
          flex flex-col items-center justify-center
          bg-black text-white
          transition-transform duration-500
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-3xl"
        >
          ✕
        </button>

        {/* MOBILE LINKS */}
        <div className="flex flex-col gap-10 text-4xl font-bold">

          {links.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}

              /**
               * Active state for mobile menu
               */
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