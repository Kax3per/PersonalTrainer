import trainerImg from "../assets/images/after5.jpg";
import gym1 from "../assets/images/gym1.jpg";
import gym2 from "../assets/images/gym2.jpg";

export default function Trainer() {
  return (
    <section id="trainer" className="px-6 md:px-12 lg:px-20 py-20">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start relative">

          {/* glow */}
          <div className="absolute w-[250px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full -z-10"></div>
<img
  src={trainerImg}
  className="
    w-[75%]
    max-w-[340px]
    sm:max-w-[380px]
    md:max-w-[420px]
    lg:max-w-[440px]
    h-auto
    rounded-2xl
    shadow-[0_25px_60px_rgba(0,0,0,0.25)]
    transition

  "
  style={{ imageRendering: "auto" }}
/>

        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl">

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

          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            I help people build strong, aesthetic physiques while developing discipline
            and confidence. My system is based on real experience and proven strategies
            that deliver long-term results.
          </p>

          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
            This is not just about training — it's about creating a mindset that keeps
            you consistent, focused, and improving every single day.
          </p>

          {/* 🔥 STATS BOXES */}
          <div className="grid grid-cols-2 gap-4 mb-8">

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

          <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
            Whether you're just starting or already experienced, everything is adapted
            to your level and your goals.
          </p>

          {/* 🔥 IMAGES */}
          <div className="grid grid-cols-2 gap-4">

            <img
              src={gym1}
              className="
                w-full h-[150px] sm:h-[180px] md:h-[200px]
                object-cover rounded-xl
                shadow-md
                hover:scale-[1.03]
                transition
              "
            />

            <img
              src={gym2}
              className="
                w-full h-[150px] sm:h-[180px] md:h-[200px]
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