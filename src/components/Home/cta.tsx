"use client";
import Image from "next/image";

const campusLifeData = [
  {
    title: "Sports & Games",
    desc: "Cricket, football, volleyball, basketball, athletics, and indoor games.",
    img: "/images/colleges/sports.jpg",
  },
  {
    title: "Cultural Activities",
    desc: "Dance, music, drama, cultural fests, and inter-college competitions.",
    img: "/images/colleges/culuturals.jpg",
  },
  {
    title: "Technical Clubs",
    desc: "Coding clubs, robotics, AI workshops, hackathons, and tech events.",
    img: "/images/colleges/technical.jpg",
  },
  {
    title: "Student Clubs",
    desc: "Leadership, entrepreneurship, literary, and communication clubs.",
    img: "/images/colleges/clubs.jpg",
  },
  {
    title: "NSS & NCC",
    desc: "Social service, discipline, leadership training, and national service.",
    img: "/images/colleges/nss.jpg",
  },
  {
    title: "Hostel & Facilities",
    desc: "Safe hostels, library, Wi-Fi campus, cafeteria, and transport.",
    img: "/images/colleges/hostels.jpg",
  },
];

export default function CampusLife() {
  return (
    <section className="to-blue-600/10 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Campus <span className="text-blue-600">Life</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Enjoy sports, culturals, clubs, and a vibrant student life that
            shapes your future beyond academics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusLifeData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
