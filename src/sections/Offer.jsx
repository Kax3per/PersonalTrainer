import { useState } from "react";
import training from "../assets/images/after1.jpg";
import strength from "../assets/images/after2.jpg";
import nutrition from "../assets/images/after3.jpg"; 

/**
 * Offer Component (Personal Trainer Landing)
 * ------------------------------------------
 * Section presenting the core training system and value proposition.
 *
 * Responsibilities:
 * - Introduce training philosophy (top section)
 * - Provide interactive engagement (flip card)
 * - Showcase key pillars of the system (bottom cards)
 *
 * UX Concept:
 * - Interactive entry point (flip card)
 * - Clear system explanation (headline + text)
 * - Visual breakdown of core elements (training / strength / nutrition)
 */
export default function Offer() {

  /**
   * Flip state for interactive card
   * Controls front/back visibility on mobile (click)
   * Desktop handled additionally via hover
   */
  const [flipped, setFlipped] = useState(false);

  return (
    /* ================= OFFER SECTION ================= */
    <section id="offer" className="px-6 md:px-12 lg:px-20 py-20">
      
      {/* ================= TOP SECTION ================= */}
      {/* Layout: flip card + descriptive text */}
      <div className="grid lg:grid-cols-2 gap-14 mb-20 items-center">
        
        {/* ================= FLIP CARD ================= */}
        {/* Interactive component: click (mobile) + hover (desktop) */}
        <div
          className="group relative h-85 cursor-pointer perspective"
          onClick={() => setFlipped(!flipped)}
        >
          {/* rotating container */}
          {/* preserve-3d ensures proper 3D rendering */}
          <div
            className={`
              relative w-full h-full
              transition-transform duration-700
              preserve-3d

              /* mobile state */
              ${flipped ? "rotate-y-180" : ""}

              /* desktop hover */
              lg:group-hover:rotate-y-180
            `}
          >
            
            {/* ================= FRONT SIDE ================= */}
            {/* initial message + emotional hook */}
            <div className="absolute inset-0 bg-black text-white rounded-2xl p-10 backface-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

              <div>
                {/* label */}
                <p className="text-xs tracking-widest text-blue-400 mb-2">
                  GET YOUR
                </p>

                {/* headline */}
                <h2 className="text-4xl font-bold mb-4">
                  MOVE ON 🚀
                </h2>

                {/* description */}
                <p className="text-sm opacity-70">
                  Start your transformation journey today.
                  Real transformation is not just about how you look — it's about who you become.
                </p>
              </div>

              {/* interaction hint */}
              <div className="text-xs opacity-60 mt-6">

                {/* desktop */}
                <p className="hidden lg:block">
                  👉 Hover to discover more
                </p>

                {/* mobile */}
                <p className="lg:hidden">
                  👉 Tap to flip
                </p>

              </div>

            </div>

            {/* ================= BACK SIDE ================= */}
            {/* logical explanation of value */}
            <div className="absolute inset-0 bg-white text-black rounded-2xl p-10 rotate-y-180 backface-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-200">

              <div>
                {/* title */}
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Why it works 💪
                </h3>

                {/* key benefits */}
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>🔥 Step-by-step plan</li>
                  <li>⚡ Fast progress</li>
                  <li>🧠 Mindset system</li>
                  <li>📈 Weekly tracking</li>
                </ul>
              </div>

              {/* supporting statement */}
              <p className="text-xs text-gray-400">
                Real results. Real system.
              </p>

            </div>

          </div>
        </div>

        {/* ================= TEXT CONTENT ================= */}
        {/* explanation of the system */}
        <div className="max-w-xl">

          {/* section heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            FITNESS <span className="text-blue-600">SYSTEM</span> 🏆
          </h2>

          {/* description */}
          <p className="text-gray-600 mb-4">
            This is a complete system designed to transform your body and mindset.
          </p>

          <p className="text-gray-600">
            Built on real experience and proven results.
          </p>

        </div>

      </div>

      {/* ================= BOTTOM SECTION ================= */}
      {/* feature cards: core pillars of the system */}
      <div className="grid md:grid-cols-3 gap-10">

        {[
          {
            icon: "💪",
            title: "Training",
            text: "Structured workouts for maximum performance.",
            img: training
          },
          {
            icon: "🏋️",
            title: "Strength",
            text: "Build power and muscle effectively.",
            img: strength
          },
          {
            icon: "🥗",
            title: "Nutrition",
            text: "Smart nutrition for faster results.",
            img: nutrition
          }
        ].map((item, i) => (

          /* ================= CARD ================= */
          <div
            key={i}
            className="
              relative

              /* visual style */
              bg-white/80 backdrop-blur-md
              rounded-2xl
              p-6 text-center

              /* border */ border-blue-100

              /* interaction */
              transition-all duration-300

              /* shadow system */
              hover:shadow-[0_40px_100px_rgba(37,99,235,0.45)]

              /* hover lift */
              hover:-translate-y-2
            "
          >

            {/* glow overlay on hover */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-blue-500/5 opacity-0
              hover:opacity-100
              transition
            "></div>

            {/* card content */}
            <div className="relative z-10">

              {/* icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* title */}
              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              {/* description */}
              <p className="text-sm text-gray-600 mb-5">
                {item.text}
              </p>

              {/* image */}
              <img
                src={item.img}
                className="rounded-xl h-50 w-full object-cover"
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}