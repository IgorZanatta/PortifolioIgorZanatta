import React from "react";
import { Box, Typography } from "@mui/material";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    url: string;
    images: string[];
  };
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        overflow: "hidden",
        textAlign: "center",
        width: "100%", // Ocupa toda a largura disponível
        maxWidth: "500px", // Limita o tamanho máximo do card
        margin: "0 auto", // Centraliza no grid
        transition: "transform 0.2s", // Efeito ao passar o mouse
        "&:hover": { transform: "scale(1.05)" }, // Pequeno zoom ao passar o mouse
      }}
    >
      <img
        src={project.images[0]}
        alt={project.name}
        style={{ 
          width: "100%", 
          height: "250px", // Aumentei o tamanho da imagem
          objectFit: "cover" 
        }}
      />
      <Box p={2}>
        <Typography 
          variant="h6" 
          fontWeight="bold"
          sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }} // Ajuste de tamanho para telas grandes
        >
          {project.name}
        </Typography>
        <Typography 
          variant="body2" 
          color="textSecondary"
          sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }} // Ajuste do texto para melhor leitura
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
