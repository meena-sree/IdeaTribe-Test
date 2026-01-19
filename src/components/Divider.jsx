import bgImage from '../assets/dividerImage.png'
export default function Divider() {
  return (
    <section
      className="w-full py-28 flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center px-6">
        Three steps. A million possibilities.
      </h2>
    </section>
  );
}
