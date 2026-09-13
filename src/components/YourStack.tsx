import type { Tech } from "../types/tech";
import { icons } from "../assets/icons";

interface Props {
  stack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: Props) {
  return (


    //<aside className="border border-slate-200 rounded-xl p-5 h-fit lg:sticky lg:top-24 bg-white">
      <aside className="border border-slate-200 rounded-xl p-5 h-fit lg:sticky lg:top-34 mt-24 bg-white">

      <h3 className="font-bold text-lg text-slate-900">Your Stack</h3>
      <p className="text-sm text-slate-500 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-slate-300 rounded-lg py-10 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 border border-slate-200 rounded-lg p-2.5"
            >
              <img
                src={icons[item.icon]}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">{item.category}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-slate-400 hover:text-red-500 text-lg leading-none px-1"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-1 border border-red-300 text-red-500 rounded-lg py-2 text-sm font-medium hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}