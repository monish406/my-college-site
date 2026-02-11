import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-20">
      
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="College Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen px-4 sm:px-6">

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center text-center text-white max-w-4xl mx-auto">

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
              Enjoy, Learn & Live in This Fab Campus
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
              Our college offers world-class education with a vibrant campus life
              that encourages innovation, creativity, sports, and cultural excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                Apply Now
              </button>

              <button className="w-full sm:w-auto px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition">
                Explore Campus
              </button>
            </div>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
              <span className="px-3 py-1 bg-white/10 rounded-full">🎓 Quality Education</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">🏆 Sports & Culturals</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">💡 Innovation</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">🌍 Career Learning</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center text-white max-w-6xl mx-auto">

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">50+</h3>
              <p className="text-xs sm:text-sm">Years of Excellence</p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">120+</h3>
              <p className="text-xs sm:text-sm">Expert Faculty</p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">30+</h3>
              <p className="text-xs sm:text-sm">Clubs & Activities</p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">95%</h3>
              <p className="text-xs sm:text-sm">Placement Support</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
