"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* College Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            ABC College of Engineering
          </h2>
          <p className="text-sm leading-relaxed">
            Empowering students with quality education, innovation,
            and real-world skills for a better future.
          </p>
          <p className="mt-4 text-sm">
            📍 Chennai, Tamil Nadu  
            <br />
            📞 +91 98765 43210  
            <br />
            ✉️ info@abccollege.edu
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Admissions</li>
            <li className="hover:text-white cursor-pointer">Placements</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Departments
          </h3>
          <ul className="space-y-2 text-sm">
            <li>CSE</li>
            <li>ECE</li>
            <li>EEE</li>
            <li>Mechanical</li>
            <li>Civil</li>
          </ul>
        </div>

        {/* Footer Form */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Admission Enquiry
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500 text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500 text-sm"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} ABC College. All Rights Reserved.
      </div>
    </footer>
  );
}
