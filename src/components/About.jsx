import { about } from "../data/info";

export default function About() {
  return (
    <section className="py-6">
      <p className="max-w-2xl text-black/80 dark:text-white/80 leading-relaxed">{about}</p>
    </section>
  );
}
