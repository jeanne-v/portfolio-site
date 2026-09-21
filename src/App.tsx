import Hero from "./components/Hero/Hero";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import LinksSection from "./components/LinksSection/LinksSection";
import Footer from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <main>
        <Hero />
        <ProjectsSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
}
