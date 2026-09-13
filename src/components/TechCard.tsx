import type { Tech } from "../types/tech";
import { icons } from "../assets/icons";

interface Props {
  tech: Tech;
  added: boolean;
  onAdd: (tech: Tech) => void;
}

export default function TechCard({ tech, added, onAdd }: Props) {
  return (
    <div
      className={`border rounded-xl p-5 bg-white hover:shadow-md transition flex flex-col ${
        added ? "border-red-500 border-2" : "border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          src={icons[tech.icon]}
          alt={tech.name}
          className="w-8 h-8 object-contain"
        />
        {tech.badge && (
          <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-bold text-lg text-slate-900">{tech.name}</h3>
      <p className="text-sm text-slate-500 mt-1 flex-1">{tech.description}</p>

      <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-medium">
          {tech.category}
        </span>
        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-medium">
          {tech.difficulty}
        </span>
        <span className="ml-auto text-yellow-500 font-semibold flex items-center gap-1">
          ⭐ {tech.rating}
        </span>
      </div>

      <button
        disabled={added}
        onClick={() => onAdd(tech)}
        className={`mt-4 w-full py-2.5 rounded-lg text-sm font-semibold transition ${
          added
            ? "bg-slate-200 text-slate-500 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}