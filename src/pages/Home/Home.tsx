import { useRef } from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      hero: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const ref = refs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <div ref={heroRef}>
        <Hero scrollToContactMe={() => scrollToSection("contact")} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
    </>
  );
};

export default Home;
