export default function Contact() {
  return (
    <section className="min-h-screen bg-linear-to-br from-purple-700 to-pink-600 flex items-center justify-center px-6 py-20">
      
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-purple-900 rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* ================= LEFT PANEL ================= */}
        <div className="p-10 text-white flex flex-col justify-between">
          
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Let’s connect <br /> with our college
            </h2>

            <p className="text-purple-200 mb-8">
              Reach out to us for admissions, courses, campus facilities,
              or any academic inquiries.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <p>info@mycollege.edu</p>
              </div>

              <div className="flex items-center gap-3 bg-purple-800 p-4 rounded-lg">
                <span className="text-xl">📞</span>
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <p>123 College Road, City, India</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10">
            <span className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">f</span>
            <span className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">in</span>
            <span className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">𝕏</span>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="blur-smoke p-10">
          
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            I’m interested in
          </h3>

          {/* Interest Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Admissions", "Courses", "Placements", "Scholarships", "Other"].map(
              (item, index) => (
                <button
                  key={index}
                  type="button"
                  className="px-4 py-2 border rounded-md text-sm hover:bg-purple-600 hover:text-white transition"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Student Name"
              className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              ✈ Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
