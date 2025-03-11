import { useRef } from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import NavBar from "../../components/NavBar/NavBar";
import SocialSidebar from "../../components/SocialSidebar/SocialSidebar";
import { styled } from "@mui/material";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    console.log(`Tentando rolar para a seção: ${section}`); // Teste no console
  
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      hero: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };
  
    const ref = refs[section];
  
    if (ref?.current) {  
      // NOVO MÉTODO: scrollIntoView
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } 
  };
  
  

  const SectionWrapper = styled("div")({
    width: "100%",
    padding: 0,
    margin: 0,
    overflow: "hidden",
    scrollBehavior: "smooth", // Adiciona um scroll suave global
  });

  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <SocialSidebar />

      <SectionWrapper ref={heroRef}>
        <Hero scrollToContactMe={() => scrollToSection("contact")} />
      </SectionWrapper>
      <SectionWrapper ref={aboutRef}>
        <About />
      </SectionWrapper>
      <SectionWrapper ref={skillsRef}>
        <Skills />
      </SectionWrapper>
      <SectionWrapper ref={projectsRef}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper ref={contactRef}>
        <ContactMe />
      </SectionWrapper>
    </>
  );
};

export default Home;
