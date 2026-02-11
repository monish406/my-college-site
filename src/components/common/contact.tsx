import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-linear-to-br from-indigo-600 via-blue-600 to-purple-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact us
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Feel free to contact us any time. We will get back to you as soon as we can!
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* LEFT : FORM */}
          <div className="lg:col-span-2 bg-white text-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

            <form className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="md:col-span-2 border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
            
                placeholder="Your Message"
                className="md:col-span-2 border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT : CONTACT INFO */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                📍 <span>123 College Road, Chennai, India</span>
              </li>
              <li className="flex items-start gap-3">
                📞 <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                ✉️ <span>info@mycollege.edu</span>
              </li>
              <li className="flex items-start gap-3">
                ⏰ <span>Mon – Fri : 9:00 AM – 5:00 PM</span>
              </li>
            </ul>

            {/* Image */}
            <div className="mt-8">
              <Image
                src="/contact/illustration.png"
                alt="Contact Illustration"
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
