import logo from "../assets/logo-gca.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="GCA Logo" className="h-8" />
        </div>

        {/* Center: Links */}
        <ul className="flex gap-6 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Courses</li>
          <li className="hover:text-white cursor-pointer">Certifications</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} GCA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
