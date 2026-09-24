import { experience } from "../data/info";

export default function Experience() {
  return (
    <section className="py-6">
      <ol className="relative border-l border-black/10 dark:border-white/10 ml-1">
        {experience.map((e) => (
          <li key={e.title} className="ml-5 mb-6 last:mb-0">
            <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">{e.title}</h3>
              <span className="text-xs font-mono text-black/50 dark:text-white/50">{e.period}</span>
            </div>
            <p className="text-sm text-amber-600 dark:text-amber-500 font-mono">{e.org}</p>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70 max-w-2xl">{e.details}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
