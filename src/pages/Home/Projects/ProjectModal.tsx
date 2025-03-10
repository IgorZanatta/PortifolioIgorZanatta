import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";

import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ProximaAuto from "../../../components/ProximaAuto/ProximaAuto"; // Componente de imagens

interface ProjectModalProps {
  project: {
    name: string;
    informativo: string;
    description: string;
    url: string;
    images: string[];
    github?: string;
  };
  open: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detecta telas pequenas

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
      sx={{
        "& .MuiDialog-paper": { 
          maxWidth: isSmallScreen ? "90vw" : "70vw", // Aumenta a largura do modal no celular
          height: "auto",
          maxHeight: "90vh",
          overflowY: "auto",
          transition: "all 0.3s ease-in-out",
        }
      }}
    >
      <DialogContent>
        <Grid container spacing={isSmallScreen ? 2 : 4}> {/* Reduz o espaçamento no celular */}
          
          {/* Imagens do projeto */}
          <Grid item xs={12} md={6}>
            <Box position="relative" borderRadius="12px" overflow="hidden">
              <ProximaAuto images={project.images} />
            </Box>
          </Grid>

          {/* Informações e botões */}
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
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                fontSize: isSmallScreen ? "1.3rem" : "2rem", 
                marginBottom: isSmallScreen ? "8px" : "16px" // Reduz margem inferior do título no celular
              }}
            >
              {project.name}
            </Typography>

            {/* Texto informativo com SCROLL em telas pequenas */}
            <Box
              sx={{
                maxHeight: isSmallScreen ? "150px" : "none", // Define limite de altura apenas no celular
                overflowY: isSmallScreen ? "auto" : "visible", // Habilita scroll apenas no celular
                padding: "8px",
                textAlign: "justify",
                width: "90%",
                borderRadius: "8px",
                marginBottom: isSmallScreen ? "12px" : "24px" // Reduz margem inferior do texto no celular
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: isSmallScreen ? "0.9rem" : "1.25rem", 
                  lineHeight: "1.5", 
                  color: "#444" 
                }}
              >
                {project.informativo}
              </Typography>
            </Box>

            {/* Botão de Visitar o Projeto */}
            <Button
              variant="contained"
              color="primary"
              href={project.url}
              target="_blank"
              rel="noopener"
              sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, width: "200px" }}
            >
              Visite <MeetingRoomIcon />
            </Button>

            {/* Botão do GitHub */}
            {project.github && (
              <Button
                variant="contained"
                color="primary"
                href={project.github}
                target="_blank"
                rel="noopener"
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, width: "200px" }}
              >
                GitHub
              </Button>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
