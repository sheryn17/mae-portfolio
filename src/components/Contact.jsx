import { profile } from "../data/info";

function Row({ label, value, href }) {
  if (!value) return null;
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center justify-between px-4 py-3 border border-black/10 dark:border-white/10 rounded hover:border-amber-500 transition-colors"
    >
      <span className="text-sm font-mono text-black/50 dark:text-white/50">{label}</span>
      <span className="text-sm">{value}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <section className="py-6 flex flex-col gap-3">
      <p className="text-black/70 dark:text-white/70">
        Open to opportunities in software development and security.
      </p>
      <div className="grid sm:grid-cols-2 gap-2">
        <Row label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <Row label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
        {profile.linkedin && <Row label="LinkedIn" value="Connect" href={profile.linkedin} />}
        {profile.facebook && <Row label="Facebook" value="Message me" href={profile.facebook} />}
        {profile.messenger && <Row label="Messenger" value="Chat" href={profile.messenger} />}
        {profile.github && <Row label="GitHub" value="Follow" href={profile.github} />}
      </div>
    </section>
  );
}
