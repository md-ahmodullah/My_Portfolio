import About from "../Components/About";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import BackendDatabase from "../Components/Skills/BackendDatabase";
import FrontendSkills from "../Components/Skills/FrontendSkills";
import ToolsTech from "../Components/Skills/ToolsTech";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FrontendSkills />
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pb-24">
        <BackendDatabase />
        <ToolsTech />
      </div>
      <Projects />
      <Contact />
    </>
  );
}
