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
      description: "O SafraFacil é um sistema para gestão agrícola.",
      url: "https://safrafacil.vercel.app/",
      github: {
        frontend: "https://github.com/IgorZanatta/safrafacil",
        backend: "https://github.com/IgorZanatta/SafraFacilApi",
      },
      images: [Image1SafraFacil, Image2SafraFacil, Image3SafraFacil],
    },
    {
      name: "Jogo: Reversi",
      description: "O Reversi é um jogo estratégico para desafiar sua lógica.",
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
