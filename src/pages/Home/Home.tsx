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
      const offset = 64; // Altura do AppBar em pixels
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  
  const SectionWrapper = styled("div")(({  }) => ({
    width: "100%",
    padding: 0, // Remove qualquer espaçamento extra entre as seções
    margin: 0,
    overflow: "hidden", // Previne quebras visuais
  }));
  


  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <SocialSidebar /> {/* Adicionando a barra lateral fixa */}
      
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
