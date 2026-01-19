const cards = [
  {
    id: "01",
    title: "Build",
    desc:
      "Identify your cybersecurity skills and build a personalized roadmap designed for growth and impact.",
  },
  {
    id: "02",
    title: "Validate",
    desc:
      "Validate your skills with structured assessments and real-world scenarios to prove your readiness.",
  },
  {
    id: "03",
    title: "Grow",
    desc:
      "Unlock opportunities with continuous learning paths and recommendations to accelerate your career.",
  },
];

export default function Cards() {
  return (
    <section className="w-full bg-black py-32">
      {/* Section title */}
      <h2 className="text-4xl font-semibold text-center mb-20">
        Build, Validate, and Grow
      </h2>

      {/* Cards */}
      <div className="max-w-5xl mx-auto space-y-24">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="sticky top-32"
            style={{ zIndex: cards.length - index }}
          >
            <div className="bg-gradient-to-br from-blue-900 to-black border border-blue-500/30 rounded-2xl p-10 shadow-xl">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Number */}
                <div className="text-6xl font-bold text-blue-500">
                  {card.id}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 max-w-xl">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
