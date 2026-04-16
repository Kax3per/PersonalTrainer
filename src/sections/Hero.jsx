import { useState } from "react";
import video from "../assets/video/mainVideo.mp4";

export default function Hero() {
  const [open, setOpen] = useState(false);
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
    
    <section id="home" className="
      relative
      flex-1 grid lg:grid-cols-2
      px-6 md:px-12 lg:px-20
      py-14 md:py-20
      gap-10 lg:gap-16
      items-stretch
      bg-white
    ">

      {/* 🔥 BACKGROUND EFFECT */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* LEFT */}
      <div className="relative z-10 text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col justify-center">
        
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

        <p className="tracking-[0.4em] text-blue-500 mb-4 text-xs md:text-sm font-medium">
          PERSONAL TRAINER
        </p>

        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
          Get stronger, feel better, and achieve your dream physique 
          with a personalized training system designed for real results.
        </p>

        {/* 🔥 SOCIAL */}
        <div className="mb-8 flex gap-4 justify-center lg:justify-start">

          {/* INSTAGRAM */}
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-md hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
          </div>

          {/* FACEBOOK */}
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-md hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.4 3h-2.3v7A10 10 0 0 0 22 12z"/>
            </svg>
          </div>

          {/* PHONE */}
          <a
            href="tel:+48123456789"
            onClick={() => setOpen((v) => !v)}
            className={`
              group relative flex items-center
              h-12 rounded-full bg-black text-white overflow-hidden
              transition-all duration-300 ease-out
              shadow-md
              w-12
              hover:w-[190px]
              ${open ? "w-[190px]" : ""}
            `}
          >
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.7 22 2 13.3 2 2.5c0-.6.4-1 1-1H6.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"/>
              </svg>
            </div>

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

        {/* 🔥 BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center lg:justify-start">

          <button className="
            w-full sm:w-auto
            bg-blue-600 text-white
            px-8 py-3
            rounded-full
            text-sm font-semibold
            shadow-lg shadow-blue-500/30
            hover:scale-105 transition
          "  onClick={() => scrollToSection("pricing")}>
            START NOW
          </button>

          <button className="
            w-full sm:w-auto
            border border-gray-300
            px-8 py-3
            rounded-full
            text-sm font-semibold
            hover:bg-gray-100 transition
          "  onClick={() => scrollToSection("pricing")}>
            LEARN MORE
          </button>

        </div>

      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex justify-end pr-12 relative">

        {/* glow */}
        <div className="absolute right-0 top-0 w-[250px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="w-full max-w-[380px] lg:max-w-[440px] xl:max-w-[500px] relative z-10">
          
          <div className="relative w-full h-[440px] lg:h-[540px] xl:h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/10" />

          </div>

        </div>

      </div>

    </section>
  );
}