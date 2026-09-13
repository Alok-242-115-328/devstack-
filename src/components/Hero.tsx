import { heroImg } from "../assets/icons";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 text-slate-600 md:text-lg max-w-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-7 flex flex-wrap gap-4">
          <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={heroImg} alt="Stack illustration" className="w-full max-w-md" />
      </div>
    </section>
  );
}