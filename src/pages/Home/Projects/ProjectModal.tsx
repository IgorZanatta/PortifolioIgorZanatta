import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



interface ProjectModalProps {
  project: {
    name: string;
    description: string;
    url: string;
    images: string[];
    github?: {
      frontend?: string;
      backend?: string;
    };
  };
  open: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Grid container spacing={4}>
          {/* Imagem com Botões Sobrepostos */}
          <Grid item xs={12} md={6}>
            <Box position="relative" borderRadius="12px" overflow="hidden">
            <img
                src={project.images[currentImageIndex]}
                alt={project.name}
                style={{
                    width: "100%", // Define que a imagem ocupa toda a largura do contêiner
                    height: "400px", // Ajusta a altura da imagem
                    objectFit: "cover", // Garante que a imagem seja cortada proporcionalmente
                    display: "block",
                    borderRadius: "12px",
                }}
            />

              {/* Botões Sobrepostos */}
              <Button
                onClick={handlePrevImage}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    width: "40px", // Largura do botão
                    height: "40px", // Altura do botão
                    borderRadius: "50%", // Torna o botão circular
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    minWidth: "unset", // Remove o comportamento padrão de largura mínima do Material-UI
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                <NavigateBeforeIcon />
              </Button>
              <Button
                onClick={handleNextImage}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    width: "40px", // Largura do botão
                    height: "40px", // Altura do botão
                    borderRadius: "50%", // Torna o botão circular
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    minWidth: "unset", // Remove o comportamento padrão de largura mínima do Material-UI
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                <NavigateNextIcon />
              </Button>
            </Box>
          </Grid>

          {/* Detalhes e Botões */}
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Typography variant="h4" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {project.description}
            </Typography>

            {/* Botão de Visualizar o Projeto */}
            <Button
              variant="contained"
              color="primary"
              href={project.url}
              target="_blank"
              rel="noopener"
              sx={{ mt: 2 }}
            >
              Visite o Site
            </Button>

            {/* Botões de Repositórios do GitHub */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2} // Espaçamento entre os botões
                mt={2} // Margem superior
                >
                {project.github?.frontend && (
                    <Button
                    variant="contained"
                    color="primary"
                    target="_blank"
                    rel="noopener"
                    sx={{ mt: 2 }}
                    href={project.github.frontend}
                    >
                    Front-End
                    </Button>
                )}
                {project.github?.backend && (
                    <Button
                    variant="contained"
                    color="primary"
                    target="_blank"
                    rel="noopener"
                    sx={{ mt: 2 }}
                    href={project.github.backend}
                    >
                    Back-End
                    </Button>
                )}
                </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
