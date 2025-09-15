import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <Link href="/" className="text-lg font-bold">
          Yuto Wears
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Yuto Wears. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
