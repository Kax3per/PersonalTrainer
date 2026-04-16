import { useState } from "react";

export default function Offer() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="offer" className="px-6 md:px-12 lg:px-20 py-20">
      
      {/* TOP */}
      <div className="grid lg:grid-cols-2 gap-14 mb-20 items-center">
        
        {/* FLIP CARD */}
        <div
          className="group relative h-[340px] cursor-pointer perspective"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`
              relative w-full h-full
              transition-transform duration-700
              preserve-3d
              ${flipped ? "rotate-y-180" : ""}
              lg:group-hover:rotate-y-180
            `}
          >
            
            {/* FRONT */}
            <div className="absolute inset-0 bg-black text-white rounded-2xl p-10 backface-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div>
                <p className="text-xs tracking-widest text-blue-400 mb-2">
                  GET YOUR
                </p>

                <h2 className="text-4xl font-bold mb-4">
                  MOVE ON 🚀
                </h2>

                <p className="text-sm opacity-70">
                  Start your transformation journey today.
                </p>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-white text-black rounded-2xl p-10 rotate-y-180 backface-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-200">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Why it works 💪
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li>🔥 Step-by-step plan</li>
                  <li>⚡ Fast progress</li>
                  <li>🧠 Mindset system</li>
                  <li>📈 Weekly tracking</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            FITNESS <span className="text-blue-600">SYSTEM</span> 🏆
          </h2>

          <p className="text-gray-600 mb-4">
            This is a complete system designed to transform your body and mindset.
          </p>

          <p className="text-gray-600">
            Built on real experience and proven results.
          </p>
        </div>

      </div>

      {/* 🔥 BOTTOM CARDS */}
      <div className="grid md:grid-cols-3 gap-10">

        {[
          {
            icon: "💪",
            title: "Training",
            text: "Structured workouts for maximum performance.",
            img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
          },
          {
            icon: "🏋️",
            title: "Strength",
            text: "Build power and muscle effectively.",
            img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba"
          },
          {
            icon: "🥗",
            title: "Nutrition",
            text: "Smart nutrition for faster results.",
            img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
          }
        ].map((item, i) => (
          <div
            key={i}
            className="
              relative
              bg-white/80 backdrop-blur-md
              rounded-2xl
              p-6 text-center
              border border-blue-100

              transition-all duration-300

              shadow-[0_20px_60px_rgba(37,99,235,0.25)]
              hover:shadow-[0_40px_100px_rgba(37,99,235,0.45)]
              hover:-translate-y-2
            "
          >

            {/* 🔥 GLOW LAYER */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-blue-500/5 opacity-0
              hover:opacity-100
              transition
            "></div>

            <div className="relative z-10">

              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mb-5">
                {item.text}
              </p>

              <img
                src={item.img}
                className="rounded-xl h-[200px] w-full object-cover"
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}