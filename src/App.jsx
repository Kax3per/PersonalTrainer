import PageWrapper from "./layout/PageWrapper";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Transformation from "./sections/Transformation";
import Trainer from "./sections/Trainer";
import Pricing from "./sections/Pircing";

function SectionWrapper({ children }) {
  return (
    <div className="px-4 md:px-8 py-10">
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

export default function App() {
  return (
    <PageWrapper>

     
    <section>
<SectionWrapper>
         <Navbar />
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Trainer />
      </SectionWrapper>

      <SectionWrapper>
        <Offer />
      </SectionWrapper>

      <SectionWrapper>
        <Transformation />
      </SectionWrapper>

      <SectionWrapper>
        <Pricing />
      </SectionWrapper>

    </section>
      
    </PageWrapper>
  );
}