import Image from "next/image";

export default function About() {
  return (
    <main className="bg-linear-to-r from-blue-700 via-indigo-600 to-slate-800 text-white">

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Our College
            </h2>
            <p className="max-w-2xl mx-auto text-gray-200">
              Building a strong foundation for academic excellence,
              innovation, and leadership.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div className="relative">
              <Image
                src="/about/5555.jpg"
                alt="College Campus"
                width={650}
                height={450}
                className="rounded-2xl shadow-xl object-cover"
              />

              <div className="absolute -bottom-6 -right-6 bg-blue-900 px-6 py-4 rounded-xl shadow-lg hidden md:block">
                <p className="text-lg font-semibold">25+ Years</p>
                <p className="text-sm text-gray-200">of Excellence</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-amber-300 mb-6">
                Empowering Future Leaders
              </h3>

              <p className="text-gray-200 leading-7 mb-8">
                Our college is committed to delivering high-quality education
                through experienced faculty, advanced infrastructure, and
                industry-focused learning.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg border-l-4 border-blue-700 shadow">
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Experienced Faculty
                  </h4>
                  <p className="text-sm text-gray-700">
                    Highly qualified educators.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border-l-4 border-blue-700 shadow">
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Modern Campus
                  </h4>
                  <p className="text-sm text-gray-700">
                    State-of-the-art facilities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-slate-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 grid md:grid-cols-2 gap-14 items-start">

            {/* Vision */}
            <div>
              <Image
                src="/about/mission/vision.jpg"
                alt="Our Vision"
                width={600}
                height={350}
                className="rounded-2xl shadow-lg object-cover mb-6"
              />

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700 leading-7 mb-6">
                To be a globally recognized institution known for academic
                excellence, innovation, and research.
              </p>

              <ul className="space-y-3">
                <li>✔ Global academic recognition</li>
                <li>✔ Research-driven culture</li>
                <li>✔ Social impact</li>
              </ul>
            </div>

            {/* Mission */}
            <div>
              <Image
                src="/about/mission/mission.jpg"
                alt="Our Mission"
                width={600}
                height={350}
                className="rounded-2xl shadow-lg object-cover mb-6"
              />

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-700 leading-7 mb-6">
                To provide quality education through innovation, experienced
                faculty, and student-centric learning.
              </p>

              <ul className="space-y-3">
                <li>✔ Quality education</li>
                <li>✔ Innovation & research</li>
                <li>✔ Ethical responsibility</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
