import { useState } from "react";
import { Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Image1Jogo from "../../../assets/imageJogo/Jogo2.jpg";
import Image2Jogo from "../../../assets/imageJogo/fotoJogo.jpg";
import Image1SafraFacil from "../../../assets/ImageSafraFacil/Semtitulo.jpg";
import Image2SafraFacil from "../../../assets/imageSafraFacil/foto2.jpg";
import Image3SafraFacil from "../../../assets/imageSafraFacil/foto3.jpg";
import MouseParticles from "../../../components/AnimacaoMouse/MouseParticles";

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  position: "relative",
  overflow: "hidden",
  pointerEvents: "auto",
  marginTop: "-1px", // Força o encaixe correto sem espaços extras

  "::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "10px",
    zIndex: 1,
    top: 0,
    background: "linear-gradient(to bottom, rgba(202, 233, 255, 1), rgba(27, 73, 101, 0))",
  }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText, // Mantendo a cor do Hero
  fontWeight: 600,
  fontSize: "2rem",
  marginTop: theme.spacing(2), // Move um pouco para baixo em telas pequenas
  marginBottom: theme.spacing(6), // Distância entre o título e os projetos
  
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    marginTop: theme.spacing(-2), // Move para cima em telas maiores
    marginBottom: theme.spacing(8), // Mais espaço abaixo em telas grandes
  },
}));



const ProjectsContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  pointerEvents: "auto", // Permite que os eventos passem, mas ainda sejam capturados corretamente
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: "SafraFacil",
      description: "O SafraFacil é um sistema para gestão agrícola.",
      informativo:
        " O SafraFacil foi desenvolvido como meu Trabalho de Conclusão de Curso (TCC). Foi planejado e implementado inteiramente por mim, utilizando Java com Spring Boot no backend, banco de dados SQL e React com TypeScript no frontend. O objetivo do sistema é oferecer uma plataforma de fácil usabilidade que permita o registro e gerenciamento de fazendas, suas safras, setores e as atividades realizadas em cada setor, facilitando a organização e o controle das operações agrícolas.",
      url: "https://safrafacil.vercel.app/",
      github: "https://github.com/IgorZanatta/RepositorioSafraFacil",
      images: [Image1SafraFacil, Image2SafraFacil, Image3SafraFacil],
    },
    {
      name: "Jogo: Reversi",
      description: "O Reversi é um jogo estratégico para desafiar sua lógica.",
      informativo:
        " O Reversi é um jogo de tabuleiro estratégico para dois jogadores. O objetivo é cercar e capturar as peças do oponente, virando-as para a sua cor. O jogo se encerra quando o tabuleiro está cheio ou não há mais jogadas possíveis, e o vencedor é quem tiver mais peças no tabuleiro. Esse projeto foi parte de um trabalho de Inteligência Artificial (IA), onde o desafio era criar uma IA que utilizasse o algoritmo MiniMax para jogar contra um humano em um jogo preditivo. Escolhi o Reversi por ser um jogo de regras simples e com um número menor de jogadas possíveis em comparação ao xadrez, tornando-o ideal para implementação e análise do algoritmo.",
      url: "https://igorzanatta.github.io/Reversi/",
      github: "https://github.com/IgorZanatta/Reversi",
      images: [Image1Jogo, Image2Jogo],
    },
  ];

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <StyledProjects>
      <MouseParticles /> {/* Partículas corrigidas, agora pegam toda a área */}

      <ProjectsContainer maxWidth="lg">
        <StyledTypography variant="h2" gutterBottom>
          Meus Projetos
        </StyledTypography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectCard project={project} onClick={() => handleOpenModal(project)} />
            </Grid>
          ))}
        </Grid>
        {selectedProject && (
          <ProjectModal project={selectedProject} open={isModalOpen} onClose={handleCloseModal} />
        )}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
