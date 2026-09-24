import { DarkModeProvider } from "./context/DarkModeContext";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import { profile } from "./data/info";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-2">
          <Hero />

          <SectionDivider label="about" />
          <About />

          <SectionDivider label="skills" />
          <TechStack />

          <SectionDivider label="education" />
          <Education />

          <SectionDivider label="experience" />
          <Experience />

          <SectionDivider label="projects" />
          <FeaturedProjects />

          <SectionDivider label="certifications" />
          <Certifications />

          <SectionDivider label="contact" />
          <Contact />

          <ChatBot />

          <footer className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 text-center text-[11px] font-mono text-black/40 dark:text-white/40">
            © {profile.name} · Personal Portfolio {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
