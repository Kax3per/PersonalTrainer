import { useState } from "react";
import video from "../assets/video/herovideo.mp4";

/**
 * Hero Component (Personal Trainer Landing)
 * ------------------------------------------
 * Main above-the-fold section responsible for:
 * - First impression (headline + CTA)
 * - Branding and positioning
 * - Quick access to key actions (scroll, contact)
 *
 * Responsibilities:
 * - Handle CTA scroll navigation
 * - Provide interactive contact UI (phone expand)
 * - Display visual content (video preview)
 *
 * UX Concept:
 * - Strong headline + clear CTA
 * - Social proof / quick contact access
 * - Visual storytelling via video
 */
export default function Hero() {

  /**
   * Phone CTA expansion state
   * Controls whether phone number is visible
   */
  const [open, setOpen] = useState(false);

  /**
   * SCROLL TO SECTION
   * -------------------
   * Smooth scroll with navbar offset correction
   */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    /**
     * Offset for fixed navbar height
     */
    const navbarHeight = 90;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    /**
     * Close expanded elements if needed
     */
    setOpen(false);
  };

  return (
    
    /* ================= HERO SECTION ================= */
    <section id="home" className="
      relative

      /* LAYOUT */
      flex-1 grid lg:grid-cols-2

      /* SPACING */
      px-6 md:px-12 lg:px-20
      py-14 md:py-20

      /* GRID GAP */
      gap-10 lg:gap-16

      /* ALIGNMENT */
      items-stretch

      /* BACKGROUND */
      bg-white
    ">

      {/* ================= BACKGROUND EFFECT ================= */}

      <div className="absolute -top-25 -left-25 w-75 h-75 bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* ================= LEFT CONTENT ================= */}
      <div className="relative z-10 text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col justify-center">
        
        {/* HEADLINE */}
        <h1 className="
          text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
          font-bold
          text-gray-900
          leading-tight
          mb-6
        ">
          TRANSFORM YOUR <br />
          <span className="text-blue-600 drop-shadow-sm">
            BODY & MIND
          </span>
        </h1>

        {/* SUBLABEL */}
        <p className="tracking-[0.4em] text-blue-500 mb-4 text-xs md:text-sm font-medium">
          PERSONAL TRAINER
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
          Get stronger, feel better, and achieve your dream physique 
          with a personalized training system designed for real results.
        </p>

        {/* ================= SOCIAL / CONTACT ================= */}
        <div className="mb-8 flex gap-4 justify-center lg:justify-start">

          {/* INSTAGRAM ICON */}
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-md hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
          </div>

          {/* FACEBOOK ICON */}
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-md hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.4 3h-2.3v7A10 10 0 0 0 22 12z"/>
            </svg>
          </div>

          {/* PHONE CTA */}
          <a
            href="tel:+48123456789"
            onClick={() => setOpen((v) => !v)}
            className={`
              group relative flex items-center
              h-12 rounded-full bg-black text-white overflow-hidden
              transition-all duration-300 ease-out
              shadow-md

              /* WIDTH STATE */
              w-12
              hover:w-47.5
              ${open ? "w-47.5" : ""}
            `}
          >
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.7 22 2 13.3 2 2.5c0-.6.4-1 1-1H6.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"/>
              </svg>
            </div>

            {/* PHONE TEXT */}
            <span
              className={`
                absolute left-12 right-3 text-sm whitespace-nowrap
                opacity-0 transition-opacity duration-200
                group-hover:opacity-100
                ${open ? "opacity-100" : ""}
              `}
            >
              +48 123 456 789
            </span>
          </a>

        </div>

        {/* ================= CTA BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center lg:justify-start">

          {/* PRIMARY CTA */}
          <button className="
            w-full sm:w-auto
            bg-blue-600 text-white
            px-8 py-3
            rounded-full
            text-sm font-semibold
            shadow-lg shadow-blue-500/30
            hover:scale-105 transition
          " onClick={() => scrollToSection("pricing")}>
            START NOW
          </button>

          {/* SECONDARY CTA */}
          <button className="
            w-full sm:w-auto
            border border-gray-300
            px-8 py-3
            rounded-full
            text-sm font-semibold
            hover:bg-gray-100 transition
          " onClick={() => scrollToSection("pricing")}>
            LEARN MORE
          </button>

        </div>

      </div>

      {/* ================= RIGHT VISUAL ================= */}
      <div className="hidden lg:flex justify-end pr-12 relative">

        {/* GLOW EFFECT */}
        <div className="absolute right-0 top-0 w-62.5 h-62.5 bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="w-full max-w-95 lg:max-w-110 xl:max-w-125 relative z-10">
          
          {/* VIDEO CONTAINER */}
          <div className="relative w-full h-110 lg:h-135 xl:h-155 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            
            {/* BACKGROUND VIDEO */}
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />

          </div>

        </div>

      </div>

    </section>
  );
}