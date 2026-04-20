import before1 from "../assets/images/before1.jpg";
import after1 from "../assets/images/after1.jpg";
import before2 from "../assets/images/before2.jpg";
import after2 from "../assets/images/after2.jpg";
import before3 from "../assets/images/before3.jpg";
import after3 from "../assets/images/after3.jpg";
import before4 from "../assets/images/before4.jpg";
import after4 from "../assets/images/after4.jpg";
import before5 from "../assets/images/before5.jpg";
import after5 from "../assets/images/after5.jpg";

/**
 * TransformationDetails Component (Results Showcase)
 * ---------------------------------------------------
 * Section focused on:
 * - Displaying real client transformations (before/after)
 * - Reinforcing credibility through visual proof
 * - Strengthening emotional impact (discipline → results)
 *
 * Responsibilities:
 * - Render transformation pairs (before vs after)
 * - Provide motivational separators between sections
 * - Handle navigation back to main transformation view
 *
 * UX Concept:
 * - Strong visual comparison (side-by-side)
 * - Repetition builds trust (multiple examples)
 * - Sticky CTA (back button always accessible)
 */
export default function TransformationDetails({ onBack }) {

  /**
   * PERSON COMPONENT
   * ------------------
   * Displays:
   * - Before image
   * - After image
   *
   * UX:
   * - Side-by-side comparison
   * - Hover effect adds subtle interaction
   */
  const Person = ({ before, after }) => (
    <div className="flex gap-4 justify-center">

      {/* BEFORE IMAGE */}
      <div className="relative group overflow-hidden rounded-2xl">
        <img
          src={before}
          className="w-[45vw] max-w-45 sm:max-w-55 md:max-w-65 xl:w-70 h-65 sm:h-80 md:h-95 xl:h-115 object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 text-xs bg-black text-white px-2 py-1 rounded">
          BEFORE
        </span>
      </div>

      {/* AFTER IMAGE */}
      <div className="relative group overflow-hidden rounded-2xl">
        <img
          src={after}
          className="w-[45vw] max-w-45 sm:max-w-55 md:max-w-65 xl:w-70 h-65 sm:h-80 md:h-95 xl:h-115 object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 text-xs bg-black text-white px-2 py-1 rounded">
          AFTER
        </span>
      </div>

    </div>
  );

  /**
   * DIVIDER COMPONENT
   * -------------------
   * Purpose:
   * - Separate transformation blocks
   * - Add motivational messaging
   *
   * Responsive behavior:
   * - Vertical line (desktop)
   * - Horizontal line (mobile)
   */
  const Divider = ({ text }) => (
    <div className="flex justify-center items-center w-full">

      {/* DESKTOP (vertical divider) */}
      <div className="hidden xl:block w-0.5 h-115 bg-gray-300 relative">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-sm text-gray-400 tracking-widest whitespace-nowrap">
          {text}
        </span>
      </div>

      {/* MOBILE / TABLET (horizontal divider) */}
      <div className="xl:hidden w-[80%] h-0.5 bg-gray-300 relative">
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-xs text-gray-400 tracking-widest whitespace-nowrap">
          {text}
        </span>
      </div>

    </div>
  );

  return (
    /* ================= DETAILS WRAPPER ================= */
    <div className="w-full flex flex-col items-center gap-16">

      {/* ================= ROW 1 ================= */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full">

        {/* TRANSFORMATION PAIR 1 */}
        <Person
          before={before1}
          after={after1}
        />

        {/* MOTIVATION DIVIDER */}
        <Divider text="NO EXCUSES" />   

        {/* TRANSFORMATION PAIR 2 */}
        <Person
          before={before2}
          after={after2}
        />

      </div>    

      {/* ================= ROW 2 ================= */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full">

        {/* TRANSFORMATION PAIR 3 */}
        <Person
          before={before3}
          after={after3}
        />

        {/* MOTIVATION DIVIDER */}
        <Divider text="STAY CONSISTENT" />

        {/* TRANSFORMATION PAIR 4 (external images) */}
        <Person
          before="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          after="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
        />

      </div>

      {/* ================= ROW 3 ================= */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full">

        {/* TRANSFORMATION PAIR 5 */}
        <Person
          before={before4}
          after={after4}
        />

        {/* MOTIVATION DIVIDER */}
        <Divider text="DISCIPLINE WINS" />

        {/* TRANSFORMATION PAIR 6 */}
        <Person
          before={before5}
          after={after5}
        />

      </div>

      {/* ================= BACK BUTTON ================= */}
      <div className="
        sticky 
        bottom-4 
        flex justify-center 
        mt-10
        xl:mt-16
        group
        z-10
      ">

        <button
          onClick={onBack}
          className="
            w-12 h-12 md:w-14 md:h-14
            bg-black text-white 
            rounded-full 
            flex items-center justify-center 
            shadow-lg
            transition-all duration-300
            overflow-hidden

            /* EXPAND ON HOVER */
            group-hover:w-48 md:group-hover:w-56
          "
        >

          <div className="
            flex items-center justify-center
            gap-2
            transition-all duration-300
          ">

            {/* ARROW ICON */}
            <span className="text-lg shrink-0">←</span>

            {/* EXPANDABLE TEXT */}
            <span
              className="
                text-sm whitespace-nowrap
                opacity-0 max-w-0 overflow-hidden
                transition-all duration-300
                group-hover:opacity-100 group-hover:max-w-45
              "
            >
              Back to previous page
            </span>

          </div>

        </button>

      </div>

    </div>
  );
}