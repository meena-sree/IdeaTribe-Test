import { useEffect, useState } from "react";
import heroImage from "../assets/hero-banner.png";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-black via-blue-950 to-black rounded-b-3xl px-10 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT: Hero Text Block (Right-aligned as a group) */}
        <div
          className={`flex-1 transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl ml-auto text-right">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Be <span className="text-blue-500">Skilltastic!</span>
            </h1>

            <p className="text-gray-300 mb-8">
              Build, validate & strengthen your cyber skills. Open doors to
              resilient careers and future-ready opportunities.
            </p>

            <button
              className={`bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-transform duration-700 ${
                show ? "scale-100" : "scale-90"
              }`}
            >
              Get Started →
            </button>
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div
          className={`flex-1 transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <img
            src={heroImage}
            alt="Hero Banner"
            className="w-full max-w-md mx-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
