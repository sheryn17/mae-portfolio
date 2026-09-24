import { profile } from "../data/info";
import ThemeToggle from "./ThemeToggle";
import mae from "../assets/mae.png";

export default function Hero() {
  return (
    <header className="flex flex-col gap-6 py-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-amber-500 tracking-wide">
          portfolio / dev &amp; security
        </span>
        <ThemeToggle />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <img
          src={mae}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover border border-black/10 dark:border-white/10"
        />
        <div>
          <h1 className="font-mono text-3xl md:text-5xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-3 text-base md:text-lg text-black/70 dark:text-white/70 max-w-xl">
            {profile.tagline}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="px-4 py-2 rounded bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors"
        >
          Get in touch
        </a>
        <a
          href={profile.resumeUrl}
          download
          className="px-4 py-2 rounded border border-black/20 dark:border-white/20 hover:border-amber-500 transition-colors"
        >
          Download resume
        </a>
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded border border-black/20 dark:border-white/20 hover:border-amber-500 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </header>
  );
}
