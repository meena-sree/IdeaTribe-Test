import bgImage from '../assets/dividerImage.png'
export default function Journey() {
  return (
    <section
      className="relative w-full py-32 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Join us on a journey to excellence
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg font-medium transition">
          Get Started →
        </button>
      </div>
    </section>
  );
}
