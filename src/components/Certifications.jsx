import { useState } from "react";
import { certifications } from "../data/info";

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState(null);

  if (!certifications.length) {
    return (
      <section className="py-6">
        <p className="text-sm text-black/40 dark:text-white/40 font-mono">
          No certifications added yet — list them in src/data/info.js as you earn them.
        </p>
      </section>
    );
  }

  return (
    <section className="py-6 flex flex-col gap-2">
      {certifications.map((c, i) => {
        const open = openIndex === i;
        return (
          <div
            key={c.title}
            className="border border-black/10 dark:border-white/10 rounded overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors"
            >
              <span>
                <span className="font-medium">{c.title}</span>
                <span className="block text-xs text-black/50 dark:text-white/50 font-mono mt-0.5">
                  {c.issuer}
                </span>
              </span>
              <span className="text-amber-500 font-mono text-sm">{open ? "–" : "+"}</span>
            </button>
            {open && (
              <div className="px-4 pb-3 text-sm text-black/60 dark:text-white/60 font-mono">
                Completed {c.date}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
