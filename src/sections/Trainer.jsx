import trainerImg from "../assets/images/after5.jpg";
import gym1 from "../assets/images/gym1.jpg";
import gym2 from "../assets/images/gym2.jpg";

/**
 * Trainer Component (About Coach Section)
 * ----------------------------------------
 * Section focused on:
 * - Personal branding (who is the trainer)
 * - Building trust and authority
 * - Showing experience and real-world proof
 *
 * Responsibilities:
 * - Present trainer image (visual identity)
 * - Communicate coaching philosophy
 * - Display key credibility stats
 * - Support with lifestyle/training visuals
 *
 * UX Concept:
 * - Human connection (face + story)
 * - Trust via numbers (experience, clients)
 * - Clean layout with visual balance (image ↔ text)
 */
export default function Trainer() {
  return (
    /* ================= TRAINER SECTION ================= */
    <section id="trainer" className="
      /* SPACING */
      px-6 md:px-12 lg:px-20 py-20
    ">

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT VISUAL ================= */}
        <div className="flex justify-center lg:justify-start relative">

          {/* BACKGROUND GLOW (depth + focus effect) */}
          <div className="absolute w-62.5 h-62.5 bg-blue-500/20 blur-[120px] rounded-full -z-10"></div>

          {/* TRAINER IMAGE (main identity element) */}
          <img
            src={trainerImg}
            className="
              w-[75%]
              max-w-85
              sm:max-w-95
              md:max-w-105
              lg:max-w-110
              h-auto
              rounded-2xl
              shadow-[0_25px_60px_rgba(0,0,0,0.25)]
              transition
            "
            style={{ imageRendering: "auto" }}
          />

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="max-w-xl">

          {/* HEADLINE (authority + positioning) */}
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl
            font-bold mb-6
            text-gray-900
          ">
            MEET YOUR{" "}
            <span className="text-blue-600">
              COACH
            </span>{" "}
            💪
          </h2>

          {/* DESCRIPTION (mission + value proposition) */}
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            I help people build strong, aesthetic physiques while developing discipline
            and confidence. My system is based on real experience and proven strategies
            that deliver long-term results.
          </p>

          {/* DESCRIPTION (mindset positioning) */}
          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
            This is not just about training — it's about creating a mindset that keeps
            you consistent, focused, and improving every single day.
          </p>

          {/* ================= STATS / SOCIAL PROOF ================= */}
          <div className="grid grid-cols-2 gap-4 mb-8">

            {/* STAT 1 (clients proof) */}
            <div className="
              bg-white/70 backdrop-blur-md
              rounded-xl p-5
              shadow-md
              border border-white/40
              hover:scale-[1.03]
              transition
            ">
              <p className="text-lg font-bold text-blue-600">100+</p>
              <p className="text-xs text-gray-500 mt-1">Clients transformed</p>
            </div>

            {/* STAT 2 (experience proof) */}
            <div className="
              bg-white/70 backdrop-blur-md
              rounded-xl p-5
              shadow-md
              border border-white/40
              hover:scale-[1.03]
              transition
            ">
              <p className="text-lg font-bold text-blue-600">5+ Years</p>
              <p className="text-xs text-gray-500 mt-1">Experience</p>
            </div>

          </div>

          {/* SUPPORTING TEXT (adaptability reassurance) */}
          <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
            Whether you're just starting or already experienced, everything is adapted
            to your level and your goals.
          </p>

          {/* ================= SUPPORTING IMAGES ================= */}
          <div className="grid grid-cols-2 gap-4">

            {/* IMAGE 1 (training environment context) */}
            <img
              src={gym1}
              className="
                w-full h-37.5 sm:h-45 md:h-50
                object-cover rounded-xl
                shadow-md
                hover:scale-[1.03]
                transition
              "
            />

            {/* IMAGE 2 (lifestyle / atmosphere) */}
            <img
              src={gym2}
              className="
                w-full h-37.5 sm:h-45 md:h-50
                object-cover rounded-xl
                shadow-md
                hover:scale-[1.03]
                transition
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}