import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="College Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex h-full flex-col justify-between px-6">
        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center">
          {/* Hero Content */}
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enjoy, Learn & Live in This Fab Campus
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Our college offers world-class education with a vibrant campus life
              that encourages innovation, creativity, sports, and cultural excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                Apply Now
              </button>
              <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition">
                Explore Campus
              </button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-200">
              <span className="px-4 py-2 bg-white/10 rounded-full">🎓 Quality Education</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">🏆 Sports & Culturals</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">💡 Innovation & Research</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">🌍 Career-Oriented Learning</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto w-full pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur rounded-2xl p-6 text-center text-white">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">50+</h3>
              <p className="text-sm text-gray-200">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">120+</h3>
              <p className="text-sm text-gray-200">Expert Faculty</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">30+</h3>
              <p className="text-sm text-gray-200">Clubs & Activities</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">95%</h3>
              <p className="text-sm text-gray-200">Placement Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
