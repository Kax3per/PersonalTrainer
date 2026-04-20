/**
 * Pricing Component (Personal Trainer Landing)
 * --------------------------------------------
 * Section responsible for presenting pricing tiers and converting users.
 *
 * Responsibilities:
 * - Display available plans (Starter / Pro / Elite)
 * - Highlight most valuable option (Pro plan)
 * - Communicate value through features and pricing
 *
 * UX Concept:
 * - Clear comparison between plans
 * - Visual hierarchy (highlighted middle plan)
 * - Simple scanning (price → features → decision)
 */
export default function Pricing() {

  return (
    /* ================= PRICING SECTION ================= */
    <section id="pricing" className="px-6 md:px-12 lg:px-20 py-24">

      {/* ================= HEADER ================= */}
      {/* Section intro: headline + supporting text */}
      <div className="text-center mb-16">

        {/* HEADLINE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          CHOOSE YOUR{" "}
          <span className="text-blue-600">
            PLAN
          </span>{" "}
          💰
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-500 max-w-xl mx-auto">
          Pick the plan that fits your goals and start your transformation today.
        </p>
      </div>

      {/* ================= PLANS GRID ================= */}
      {/* 3-column layout for pricing tiers */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* ================= PLAN 1 ================= */}
        {/* Entry-level plan for beginners */}
        <div className="
          bg-white/80 backdrop-blur-md
          rounded-2xl p-8
          border border-blue-100
          flex flex-col

          /* INTERACTION */
          transition
          hover:-translate-y-2

          /* SHADOW */
          shadow-[0_20px_60px_rgba(37,99,235,0.15)]
          hover:shadow-[0_30px_80px_rgba(37,99,235,0.3)]
        ">
          
          {/* PLAN NAME */}
          <h3 className="text-xl font-semibold mb-2">Starter</h3>

          {/* PLAN DESCRIPTION */}
          <p className="text-gray-500 mb-6 text-sm">Perfect for beginners</p>

          {/* PRICE */}
          <p className="text-4xl font-bold mb-6">
            $49<span className="text-sm text-gray-400">/month</span>
          </p>

          {/* FEATURES */}
          <ul className="text-gray-600 space-y-3 text-sm mb-8">
            <li>✔ Basic workout plan</li>
            <li>✔ Nutrition guidelines</li>
            <li>✔ Weekly check-in</li>
          </ul>

        </div>

        {/* ================= PLAN 2 ================= */}
        {/* Highlighted plan (primary conversion target) */}
        <div className="
          relative
          rounded-2xl p-8
          flex flex-col
          text-white
          scale-105

          /* BACKGROUND */
          bg-linear-to-br from-blue-600 to-blue-800

          /* SHADOW */
          shadow-[0_30px_100px_rgba(37,99,235,0.5)]
        ">

          {/* BADGE */}
          {/* Visual indicator for most popular choice */}
          <div className="
            absolute -top-3 left-1/2 -translate-x-1/2
            bg-white text-black text-xs font-semibold
            px-3 py-1 rounded-full shadow
          ">
            MOST POPULAR
          </div>

          {/* PLAN NAME */}
          <h3 className="text-xl font-semibold mb-2 mt-2">Pro</h3>

          {/* PLAN DESCRIPTION */}
          <p className="text-blue-100 mb-6 text-sm">Best results</p>

          {/* PRICE */}
          <p className="text-4xl font-bold mb-6">
            $99<span className="text-sm text-blue-200">/month</span>
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 text-sm mb-8">
            <li>✔ Personalized training plan</li>
            <li>✔ Full nutrition strategy</li>
            <li>✔ Weekly check-ins</li>
            <li>✔ Direct support</li>
          </ul>

        </div>

        {/* ================= PLAN 3 ================= */}
        {/* Premium plan with maximum support */}
        <div className="
          bg-white/80 backdrop-blur-md
          rounded-2xl p-8
          border border-blue-100
          flex flex-col

          /* INTERACTION */
          transition
          hover:-translate-y-2

          /* SHADOW */
          shadow-[0_20px_60px_rgba(37,99,235,0.15)]
          hover:shadow-[0_30px_80px_rgba(37,99,235,0.3)]
        ">
          
          {/* PLAN NAME */}
          <h3 className="text-xl font-semibold mb-2">Elite</h3>

          {/* PLAN DESCRIPTION */}
          <p className="text-gray-500 mb-6 text-sm">For serious results</p>

          {/* PRICE */}
          <p className="text-4xl font-bold mb-6">
            $149<span className="text-sm text-gray-400">/month</span>
          </p>

          {/* FEATURES */}
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