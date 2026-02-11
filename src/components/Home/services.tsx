export default function Services() {
  return (
    <section className="bg-blue-400/10 py-24">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {/* Courses */}
        <div
          className="h-64 bg-[url('/images/courses.jpg')] bg-cover bg-center rounded shadow flex items-end"
        >
          <div className="bg-black/60 text-white p-5 w-full rounded-b">
            <h3 className="text-xl font-semibold mb-2">Courses</h3>
            <p>Various undergraduate and postgraduate programs.</p>
          </div>
        </div>

        {/* Library */}
        <div
          className="h-64 bg-[url('/images/library.jpg')] bg-cover bg-center rounded shadow flex items-end"
        >
          <div className="bg-black/60 text-white p-5 w-full rounded-b">
            <h3 className="text-xl font-semibold mb-2">Library</h3>
            <p>Modern digital and physical library facilities.</p>
          </div>
        </div>

        {/* Placement */}
        <div
          className="h-64 bg-[url('/images/placement.jpg')] bg-cover bg-center rounded shadow flex items-end"
        >
          <div className="bg-black/60 text-white p-5 w-full rounded-b">
            <h3 className="text-xl font-semibold mb-2">Placement</h3>
            <p>Strong placement support with top companies.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
