import { logoImg } from "../assets/icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand block - takes 2 columns */}
        <div className="col-span-2 md:col-span-2">
          <img
            src={logoImg}
            alt="Dev Stack"
            className="w-32 h-8 object-contain"
          />

          <p className="text-sm text-slate-500 mt-3">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>

          <div className="flex gap-4 mt-4 text-sm text-slate-600 font-medium">
            <a href="#" className="hover:text-pink-600">GitHub</a>
            <a href="#" className="hover:text-pink-600">Twitter</a>
            <a href="#" className="hover:text-pink-600">LinkedIn</a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 mb-3 tracking-wide">
            PRODUCT
          </h4>
          <ul className="text-sm text-slate-500 space-y-2">
            <li><a href="#" className="hover:text-pink-600">Home</a></li>
            <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-600">Projects</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 mb-3 tracking-wide">
            COMPANY
          </h4>
          <ul className="text-sm text-slate-500 space-y-2">
            <li><a href="#" className="hover:text-pink-600">About</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 mb-3 tracking-wide">
            LEGAL
          </h4>
          <ul className="text-sm text-slate-500 space-y-2">
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-2">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}