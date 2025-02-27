import { useState } from "react";
import { Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Image1Jogo from "../../../assets/imageJogo/Jogo2.jpg";
import Image2Jogo from "../../../assets/imageJogo/fotoJogo.jpg";
import Image1SafraFacil from "../../../assets/imageSafraFacil/Sem título.jpg";
import Image2SafraFacil from "../../../assets/imageSafraFacil/foto2.jpg";
import Image3SafraFacil from "../../../assets/imageSafraFacil/foto3.jpg";

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh", // Altura igual a tela inteira
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(4),
}));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: "SafraFacil",
      description: "O SafraFacil é um sistema para gestão agrícola.", // Exibido na listagem
      informativo:
        " O SafraFacil foi desenvolvido como meu Trabalho de Conclusão de Curso (TCC). Foi planejado e implementado inteiramente por mim, utilizando Java com Spring Boot no backend, banco de dados SQL e React com TypeScript no frontend. O objetivo do sistema é oferecer uma plataforma de fácil usabilidade que permita o registro e gerenciamento de fazendas, suas safras, setores e as atividades realizadas em cada setor, facilitando a organização e o controle das operações agrícolas.",
      url: "https://safrafacil.vercel.app/",
      github: {
        frontend: "https://github.com/IgorZanatta/safrafacil",
        backend: "https://github.com/IgorZanatta/SafraFacilApi",
      },
      images: [Image1SafraFacil, Image2SafraFacil, Image3SafraFacil],
    },
    {
      name: "Jogo: Reversi",
      description: "O Reversi é um jogo estratégico para desafiar sua lógica.", // Exibido na listagem
      informativo:
        " O Reversi é um jogo de tabuleiro estratégico para dois jogadores. O objetivo é cercar e capturar as peças do oponente, virando-as para a sua cor. O jogo se encerra quando o tabuleiro está cheio ou não há mais jogadas possíveis, e o vencedor é quem tiver mais peças no tabuleiro. Esse projeto foi parte de um trabalho de Inteligência Artificial (IA), onde o desafio era criar uma IA que utilizasse o algoritmo MiniMax para jogar contra um humano em um jogo preditivo. Escolhi o Reversi por ser um jogo de regras simples e com um número menor de jogadas possíveis em comparação ao xadrez, tornando-o ideal para implementação e análise do algoritmo.",
      url: "https://igorzanatta.github.io/Reversi/",
      github: {
        frontend: "https://github.com/IgorZanatta/Reversi",
      },
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
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          pb={4}
          color="secondary.contrastText"
        >
          Meus Projetos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectCard project={project} onClick={() => handleOpenModal(project)} />
            </Grid>
          ))}
        </Grid>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            open={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </StyledProjects>
  );
};

export default Projects;
