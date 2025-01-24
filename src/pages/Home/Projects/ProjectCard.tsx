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
      }}
    >
      <img
        src={project.images[0]}
        alt={project.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <Box p={2}>
        <Typography variant="h6" fontWeight="bold">
          {project.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
