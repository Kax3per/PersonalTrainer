import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<button
  onClick={() =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  className={`
    hidden lg:flex
    fixed bottom-8 right-8 z-50
    w-14 h-14
    items-center justify-center
    rounded-full

    bg-blue-600 text-white

    shadow-[0_10px_40px_rgba(37,99,235,0.5)]
    hover:shadow-[0_20px_60px_rgba(37,99,235,0.7)]

    transition-all duration-300

    ${show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
    hover:scale-110
  `}
>
  ↑
</button>
  );
}

export default BackToTop;