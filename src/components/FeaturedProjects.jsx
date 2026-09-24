import { projects } from "../data/info";

export default function FeaturedProjects() {
  return (
    <section className="py-6 grid sm:grid-cols-2 gap-4">
      {projects.map((p) => (
        <div
          key={p.title}
          className="p-4 rounded border border-black/10 dark:border-white/10 flex flex-col gap-2 hover:border-amber-500/60 transition-colors"
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-500">
            {p.tag}
          </span>
          <h3 className="font-medium">{p.title}</h3>
          <p className="text-sm text-black/70 dark:text-white/70">{p.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-[10px] font-mono px-2 py-0.5 rounded border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
