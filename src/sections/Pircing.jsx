export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-12 lg:px-20 py-24">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          CHOOSE YOUR{" "}
          <span className="text-blue-600">
            PLAN
          </span>{" "}
          💰
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto">
          Pick the plan that fits your goals and start your transformation today.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* PLAN 1 */}
        <div className="
          bg-white/80 backdrop-blur-md
          rounded-2xl p-8
          border border-blue-100
          flex flex-col
          transition
          hover:-translate-y-2
          shadow-[0_20px_60px_rgba(37,99,235,0.15)]
          hover:shadow-[0_30px_80px_rgba(37,99,235,0.3)]
        ">
          
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-500 mb-6 text-sm">Perfect for beginners</p>

          <p className="text-4xl font-bold mb-6">
            $49<span className="text-sm text-gray-400">/month</span>
          </p>

          <ul className="text-gray-600 space-y-3 text-sm mb-8">
            <li>✔ Basic workout plan</li>
            <li>✔ Nutrition guidelines</li>
            <li>✔ Weekly check-in</li>
          </ul>

       

        </div>

        {/* 🔥 PLAN 2 (HIGHLIGHT) */}
        <div className="
          relative
          rounded-2xl p-8
          flex flex-col
          text-white
          scale-105

          bg-gradient-to-br from-blue-600 to-blue-800

          shadow-[0_30px_100px_rgba(37,99,235,0.5)]
        ">

          {/* BADGE */}
          <div className="
            absolute -top-3 left-1/2 -translate-x-1/2
            bg-white text-black text-xs font-semibold
            px-3 py-1 rounded-full shadow
          ">
            MOST POPULAR
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-2">Pro</h3>
          <p className="text-blue-100 mb-6 text-sm">Best results</p>

          <p className="text-4xl font-bold mb-6">
            $99<span className="text-sm text-blue-200">/month</span>
          </p>

          <ul className="space-y-3 text-sm mb-8">
            <li>✔ Personalized training plan</li>
            <li>✔ Full nutrition strategy</li>
            <li>✔ Weekly check-ins</li>
            <li>✔ Direct support</li>
          </ul>

     

        </div>

        {/* PLAN 3 */}
        <div className="
          bg-white/80 backdrop-blur-md
          rounded-2xl p-8
          border border-blue-100
          flex flex-col
          transition
          hover:-translate-y-2
          shadow-[0_20px_60px_rgba(37,99,235,0.15)]
          hover:shadow-[0_30px_80px_rgba(37,99,235,0.3)]
        ">
          
          <h3 className="text-xl font-semibold mb-2">Elite</h3>
          <p className="text-gray-500 mb-6 text-sm">For serious results</p>

          <p className="text-4xl font-bold mb-6">
            $149<span className="text-sm text-gray-400">/month</span>
          </p>

          <ul className="text-gray-600 space-y-3 text-sm mb-8">
            <li>✔ Everything in Pro</li>
            <li>✔ Daily support</li>
            <li>✔ Custom adjustments</li>
            <li>✔ Priority access</li>
          </ul>

       

        </div>

      </div>

    </section>
  );
}