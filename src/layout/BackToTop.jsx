import { useEffect, useState } from "react";

/**
 * BackToTop Component
 * --------------------
 * Floating action button that allows users to quickly scroll
 * back to the top of the page.
 *
 * Responsibilities:
 * - Monitor scroll position
 * - Toggle visibility based on threshold
 * - Provide smooth scroll-to-top interaction
 *
 * UX Concept:
 * - Appears only after meaningful scroll (progress indicator)
 * - Hidden on mobile (desktop-focused utility)
 * - Subtle animation for entrance/exit
 */
function BackToTop() {

  /**
   * Visibility state
   * true  -> button visible
   * false -> hidden
   */
  const [show, setShow] = useState(false);

  /**
   * SCROLL LISTENER
   * ----------------
   * Shows button after user scrolls past 300px
   */
  useEffect(() => {
    const handleScroll = () => {

      /**
       * Toggle visibility threshold
       */
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    /**
     * Cleanup to prevent memory leaks
     */
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    /**
     * BUTTON
     * --------
     * Fixed positioned floating button
     * - Hidden on small screens (lg breakpoint)
     * - Animated scale + opacity
     */
    <button
      onClick={() =>
        /**
         * Smooth scroll to top
         */
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className={`
        hidden lg:flex

        /* POSITION */
        fixed bottom-8 right-8 z-50

        /* SIZE */
        w-14 h-14

        /* CENTER CONTENT */
        items-center justify-center

        /* STYLE */
        rounded-full
        bg-blue-600 text-white

        /* SHADOW / DEPTH */
        shadow-[0_10px_40px_rgba(37,99,235,0.5)]
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.7)]

        /* ANIMATION */
        transition-all duration-300

        /**
         * VISIBILITY STATE
         * ------------------
         * - Visible → full opacity + scale
         * - Hidden → scaled down + no interaction
         */
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}

        /* HOVER EFFECT */
        hover:scale-110
      `}
    >
      ↑
    </button>
  );
}

export default BackToTop;