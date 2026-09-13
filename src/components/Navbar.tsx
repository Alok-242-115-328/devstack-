import { logoImg } from "../assets/icons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - logo only */}
        <div className="flex items-center">

<img
  src={logoImg}
  alt="Dev Stack"
  className="w-32 h-32 rounded-lg object-contain"
/>


        </div>

        {/* Center */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <li className="text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">Projects</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-slate-700 hover:text-pink-600">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}