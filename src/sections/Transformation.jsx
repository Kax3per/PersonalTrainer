import { useState, useRef, useEffect } from "react";
import TransformationDetails from "./TransformationDetails";

import stage1 from "../assets/images/stage1.jpg";
import stage2 from "../assets/images/stage2.jpg";
import stage3 from "../assets/images/stage3.jpg";
import before1 from "../assets/images/before1.jpg";
import after1 from "../assets/images/after1.jpg";
import before2 from "../assets/images/before2.jpg";
import after2 from "../assets/images/after2.jpg";
import before3 from "../assets/images/before3.jpg";
import after3 from "../assets/images/after3.jpg";

/**
 * Transformation Component (Progress + Results Section)
 * -----------------------------------------------------
 * Section focused on:
 * - Showing transformation journey (visual progression)
 * - Educating user about process (training, nutrition, mindset)
 * - Driving deeper engagement (details view)
 *
 * Responsibilities:
 * - Handle slider interaction (drag logic)
 * - Map slider value → transformation stage
 * - Manage details view (lazy load + transition)
 * - Preload heavy before/after assets
 *
 * UX Concept:
 * - Interactive storytelling (user controls progress)
 * - Visual feedback (stage-based imagery)
 * - Progressive reveal (details only after intent)
 */
export default function Transformation() {

  /**
   * SLIDER VALUE (0–100)
   * Controls transformation progress
   */
  const [value, setValue] = useState(0);

  /**
   * DRAG STATE
   * Enables/disables slider interaction
   */
  const [dragging, setDragging] = useState(false);

  /**
   * DETAILS VIEW STATE
   * Toggles between main section and deep dive
   */
  const [showDetails, setShowDetails] = useState(false);

  /**
   * LOADING STATE (for heavy assets)
   */
  const [loadingDetails, setLoadingDetails] = useState(false);

  /**
   * REFS
   * - sliderRef → interaction area
   * - sectionRef → scroll positioning
   */
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  /**
   * HANDLE BACK FROM DETAILS
   * ------------------------
   * Returns user to main section and restores scroll position
   */
  const handleBack = () => {
    setShowDetails(false);

    setTimeout(() => {
      const yOffset = -100;

      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 50);
  };

  /**
   * GET CURRENT STAGE
   * ------------------
   * Maps slider value → transformation stage
   */
  const getStage = () => {
    if (value < 50) return 0;
    if (value < 90) return 1;
    return 2;
  };

  const stage = getStage();

  /**
   * STAGE DATA
   * Each stage has:
   * - icon (visual feedback)
   * - image (progress representation)
   */
  const data = [
    { icon: "🍔", img: stage1 },
    { icon: "⚡", img: stage2 },
    { icon: "🔥", img: stage3 },
  ];

  /**
   * PRELOAD IMAGES
   * ----------------
   * Ensures:
   * - smooth transition to details
   * - no flicker / loading jumps
   * - minimum perceived loading time
   */
  const preloadImages = async () => {
    const images = [
      before1, after1,
      before2, after2,
      before3, after3,
    ];

    const loadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });

    const minTime = 4000;
    const start = Date.now();

    await Promise.all(images.map(loadImage));

    const elapsed = Date.now() - start;

    if (elapsed < minTime) {
      await new Promise((res) => setTimeout(res, minTime - elapsed));
    }
  };

  /**
   * SLIDER DRAG LOGIC
   * -------------------
   * Handles:
   * - mouse movement
   * - touch movement (mobile)
   * - value calculation
   */
  useEffect(() => {
    const move = (e) => {
      if (!dragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();

      let y = e.touches?.[0]?.clientY ?? e.clientY;
      y = y - rect.top;

      let percent = (y / rect.height) * 100;
      percent = Math.max(0, Math.min(100, percent));

      setValue(percent);
    };

    const up = () => setDragging(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [dragging]);

  return (
    /* ================= TRANSFORMATION SECTION ================= */
    <section
      ref={sectionRef}
      id="transformation"
      className="relative px-4 sm:px-6 md:px-10 xl:px-20 py-20"
    >

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute -top-25 -right-25 w-75 h-75 bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* ================= MAIN VIEW ================= */}
      {!showDetails ? (

        <div className="flex flex-col xl:grid xl:grid-cols-[auto_auto_1fr] gap-12 xl:gap-16 items-center">

          {/* ================= IMAGE + SLIDER ================= */}
          <div className="flex items-center gap-6 w-full justify-center">

            {/* STAGE IMAGE */}
            <img
              src={data[stage].img}
              className="
                w-[85%] max-w-[320px]
                sm:max-w-105
                md:max-w-125
                xl:w-130
                h-80
                sm:h-120
                md:h-150
                xl:h-175
                object-cover rounded-2xl
                shadow-[0_30px_80px_rgba(0,0,0,0.3)]
              "
            />

            {/* ================= VERTICAL SLIDER ================= */}
            <div
              ref={sliderRef}
              className="
                relative
                h-80 sm:h-120 md:h-150 xl:h-175
                w-17.5 xl:w-22.5
                flex justify-center
                touch-none cursor-pointer
              "
            >
              {/* TRACK */}
              <div className="absolute h-full w-2.5 bg-gray-200 rounded-full" />

              {/* PROGRESS */}
              <div
                className="
                  absolute top-0 w-2.5 rounded-full
                  bg-blue-600
                  shadow-[0_0_20px_rgba(37,99,235,0.7)]
                "
                style={{ height: `${value}%` }}
              />

              {/* HANDLE */}
              <div
                onMouseDown={() => setDragging(true)}
                onTouchStart={() => setDragging(true)}
                className="absolute"
                style={{
                  top: `${value}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="
                  bg-black text-white
                  px-3 py-1 rounded-full text-sm
                  shadow-lg
                ">
                  {data[stage].icon}
                </div>
              </div>
            </div>

          </div>

          {/* ================= TEXT CONTENT ================= */}
          <div className="max-w-xl text-center md:text-left">

            {/* HEADLINE */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              REAL{" "}
              <span className="text-blue-600">
                TRANSFORMATION
              </span>{" "}
              💪
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              Real transformation is not just about how you look — it's about who you become.
            </p>

            {/* SYSTEM BLOCKS */}
            <div className="mb-6">
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-blue-600">
                Training System
              </h3>
              <p className="text-gray-600">
                Structured workouts designed to progressively build strength.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-blue-600">
                Nutrition Strategy
              </h3>
              <p className="text-gray-600">
                Balanced, sustainable nutrition.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-blue-600">
                Discipline & Mindset
              </h3>
              <p className="text-gray-600">
                Build habits that last.
              </p>
            </div>

            {/* CTA (LOAD DETAILS) */}
            <button
              onClick={async () => {
                setLoadingDetails(true);
                await preloadImages();
                setShowDetails(true);
                setLoadingDetails(false);
              }}
              className="
                px-8 py-3
                bg-blue-600 text-white
                rounded-full
                text-sm font-semibold
                shadow-lg shadow-blue-500/30
                hover:scale-105 transition
              "
            >
              SHOW MORE
            </button>

          </div>

        </div>

      ) : (

        /* ================= DETAILS VIEW ================= */
        <TransformationDetails onBack={handleBack} />

      )}

      {/* ================= LOADER ================= */}
      {loadingDetails && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-999">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

    </section>
  );
}