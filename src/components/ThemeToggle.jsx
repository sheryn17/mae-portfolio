import { useDarkMode } from "../context/DarkModeContext";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="text-xs font-mono px-3 py-1.5 rounded border border-black/20 dark:border-white/20 hover:border-amber-500 hover:text-amber-500 transition-colors"
    >
      {darkMode ? "light mode" : "dark mode"}
    </button>
  );
}
