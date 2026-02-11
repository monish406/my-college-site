"use client";
import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="relative py-24 text-white">
      
      {/* Background Image */}
      <Image
        src="/images/college/whychoose us.jpg"
        alt="College Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-blue-400">ABC College</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We provide quality education, industry exposure, and a strong
            foundation for your future career.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Experienced Faculty
            </h3>
            <p className="text-gray-300 text-sm">
              Learn from highly qualified professors with real-world experience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Excellent Placements
            </h3>
            <p className="text-gray-300 text-sm">
              Strong placement cell with top recruiters and career guidance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Modern Infrastructure
            </h3>
            <p className="text-gray-300 text-sm">
              Smart classrooms, advanced labs, and a beautiful campus.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
