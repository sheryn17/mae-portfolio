import { techStack } from "../data/info";

export default function TechStack() {
  return (
    <section className="py-6 flex flex-col gap-4">
      {Object.entries(techStack).map(([group, items]) => (
        <div key={group}>
          <p className="text-xs font-mono text-black/50 dark:text-white/50 mb-2">{group}</p>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-2.5 py-1 rounded border border-black/15 dark:border-white/15"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
