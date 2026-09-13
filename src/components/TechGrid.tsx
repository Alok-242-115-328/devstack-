import TechCard from "./TechCard";
import type { Tech } from "../types/tech";

interface Props {
  techs: Tech[];
  stack: Tech[];
  onAdd: (tech: Tech) => void;
}

export default function TechGrid({ techs, stack, onAdd }: Props) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Explore the{" "}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-slate-500 mt-1 mb-6">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {techs.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            added={stack.some((s) => s.id === tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}