import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">My College</h1>

        <div className="space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-300 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-300 transition">About</Link>
          <Link href="/services" className="hover:text-blue-300 transition">Services</Link>
          <Link href="/contact" className="hover:text-blue-300 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
