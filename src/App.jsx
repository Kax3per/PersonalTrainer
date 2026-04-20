import PageWrapper from "./layout/PageWrapper";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Transformation from "./sections/Transformation";
import Trainer from "./sections/Trainer";
import Pricing from "./sections/Pircing";
import BackToTop from "./layout/BackToTop";

/**
 * SectionWrapper Component (UI Container Layer)
 * ----------------------------------------------
 * Wrapper responsible for:
 * - Visual separation between sections
 * - Consistent styling (glass effect, shadows)
 * - Spacing system across the entire app
 *
 * Responsibilities:
 * - Provide padding around sections
 * - Apply unified card-like appearance
 * - Enhance depth via shadows and blur
 *
 * UX Concept:
 * - Each section feels like a "block"
 * - Soft UI / glassmorphism style
 * - Subtle hover feedback for interactivity
 */
function SectionWrapper({ children }) {
  return (
    <div className="px-4 md:px-8 py-10">

      {/* ================= CARD CONTAINER ================= */}
      <div className="
        bg-white/90 backdrop-blur-md
        rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        border border-white/40
        overflow-hidden
        transition
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]
      ">
        {children}
      </div>

    </div>
  );
}

/**
 * App Component (Main Layout Structure)
 * --------------------------------------
 * Root of the application responsible for:
 * - Composing all sections
 * - Managing layout hierarchy
 * - Ensuring consistent spacing and flow
 *
 * Responsibilities:
 * - Wrap app inside global layout (PageWrapper)
 * - Render navigation (Navbar)
 * - Stack all main sections in order
 * - Apply spacing offset for fixed navbar
 * - Provide global UI elements (BackToTop)
 *
 * UX Concept:
 * - Vertical storytelling (Hero → Trainer → Offer → Transformation → Pricing)
 * - Clear visual separation (SectionWrapper)
 * - Smooth scroll experience with fixed navigation
 */
export default function App() {
  return (
    /* ================= GLOBAL WRAPPER ================= */
    <PageWrapper>

      {/* ================= NAVBAR ================= */}
      {/* Positioned outside sections to stay fixed */}
      <Navbar />

      {/* ================= CONTENT OFFSET ================= */}
      {/* Prevents content from being hidden under fixed navbar */}
      <div className="pt-22.5">

        <section>

          {/* ================= HERO ================= */}
          <SectionWrapper>
            <Hero />
          </SectionWrapper>

          {/* ================= TRAINER ================= */}
          <SectionWrapper>
            <Trainer />
          </SectionWrapper>

          {/* ================= OFFER ================= */}
          <SectionWrapper>
            <Offer />
          </SectionWrapper>

          {/* ================= TRANSFORMATION ================= */}
          <SectionWrapper>
            <Transformation />
          </SectionWrapper>

          {/* ================= PRICING ================= */}
          <SectionWrapper>
            <Pricing />
          </SectionWrapper>

        </section>

      </div>

      {/* ================= BACK TO TOP ================= */}
      {/* Floating utility button */}
      <BackToTop />

    </PageWrapper>
  );
}