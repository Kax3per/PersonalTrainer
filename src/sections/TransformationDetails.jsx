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

export default function TransformationDetails({ onBack }) {

  const Person = ({ before, after }) => (
    <div className="flex gap-4 justify-center">

      <div className="relative group overflow-hidden rounded-2xl">
        <img
          src={before}
          className="w-[45vw] max-w-[180px] sm:max-w-[220px] md:max-w-[260px] xl:w-[280px] h-[260px] sm:h-[320px] md:h-[380px] xl:h-[460px] object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 text-xs bg-black text-white px-2 py-1 rounded">
          BEFORE
        </span>
      </div>

      <div className="relative group overflow-hidden rounded-2xl">
        <img
          src={after}
          className="w-[45vw] max-w-[180px] sm:max-w-[220px] md:max-w-[260px] xl:w-[280px] h-[260px] sm:h-[320px] md:h-[380px] xl:h-[460px] object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 text-xs bg-black text-white px-2 py-1 rounded">
          AFTER
        </span>
      </div>

    </div>
  );

  const Divider = ({ text }) => (
    <div className="flex justify-center items-center w-full">

      {/* DESKTOP */}
      <div className="hidden xl:block w-[2px] h-[460px] bg-gray-300 relative">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-sm text-gray-400 tracking-widest whitespace-nowrap">
          {text}
        </span>
      </div>

      {/* MOBILE / TABLET */}
      <div className="xl:hidden w-[80%] h-[2px] bg-gray-300 relative">
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-xs text-gray-400 tracking-widest whitespace-nowrap">
          {text}
        </span>
      </div>

    </div>
  );

  return (
    <div className="w-full flex flex-col items-center gap-16">

      {/* 🔥 ROW 1 */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full">
        <Person
          before={before1}
          after={after1}
        />
        <Divider text="NO EXCUSES" />   
        <Person
          before={before2}
          after={after2}
         />
        </div>    

      {/* 🔥 ROW 2 */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full">
        <Person
          before={before3}
          after={after3}
        />
        <Divider text="STAY CONSISTENT" />
        <Person
          before="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          after="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
        />
      </div>

      {/* 🔥 ROW 3 */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full">
        <Person
          before={before4}
          after={after4}
        />
        <Divider text="DISCIPLINE WINS" />
        <Person
          before={before5}
          after={after5}
        />
      </div>

      {/* 🔥 FLOATING BACK BUTTON */}
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
  group-hover:w-48 md:group-hover:w-56
"
>

  <div
    className="
      flex items-center justify-center
      gap-2
      transition-all duration-300
    "
  >

    {/* ARROW */}
    <span className="text-lg shrink-0">←</span>

    {/* TEXT */}
    <span
      className="
        text-sm whitespace-nowrap
        opacity-0 max-w-0 overflow-hidden
        transition-all duration-300
        group-hover:opacity-100 group-hover:max-w-[180px]
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