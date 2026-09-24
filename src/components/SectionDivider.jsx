export default function SectionDivider({ label }) {
  return (
    <div className="flex items-center w-full opacity-80">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/70" />
      <span className="px-4 text-[9px] lg:text-[10px] font-mono tracking-[0.35em] uppercase whitespace-nowrap text-amber-500">
        {label}
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/70" />
    </div>
  );
}
