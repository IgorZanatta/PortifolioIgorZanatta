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

import { Github } from "lucide-react";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ProximaAuto from "../../../components/ProximaAuto/ProximaAuto"; // Importe o componente

interface ProjectModalProps {
  project: {
    name: string;
    informativo: string;
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
          maxWidth: "70vw",
          height: "auto",
          maxHeight: "90vh",
          overflowY: "auto",
          transition: "all 0.3s ease-in-out",
        }
      }}
    >
      <DialogContent>
        <Grid container spacing={4}>
          {/* Componente que exibe e troca as imagens automaticamente */}
          <Grid item xs={12} md={6}>
            <Box position="relative" borderRadius="12px" overflow="hidden">
              <ProximaAuto images={project.images} /> {/* Agora as imagens trocam automaticamente */}
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
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ fontSize: isSmallScreen ? "1.5rem" : "2rem" }}
            >
              {project.name}
            </Typography>
            {/* Texto Informativo */}
            <Typography 
              variant="body1" 
              gutterBottom
              sx={{ 
                fontSize: isSmallScreen ? "0.95rem" : "1.25rem", 
                lineHeight: "1.6", 
                textAlign: "justify", 
                maxWidth: "90%", 
                color: "#444" 
              }}
            >
              {project.informativo}
            </Typography>
            {/* Botão de Visualizar o Projeto */}
            <Button
              variant="contained"
              color="primary"
              href={project.url}
              target="_blank"
              rel="noopener"
              sx={{ display: "flex", alignItems: "center", gap: 1 , mt: 2}}
              >
              Visite <MeetingRoomIcon/>
            </Button>

            {/* Botões de Repositórios do GitHub */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              mt={2}
            >
              {project.github?.frontend && (
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  rel="noopener"
                  sx={{ display: "flex", alignItems: "center", gap: 1 , mt: 2}}
                  href={project.github.frontend}
                >
                  Front-End <Github size={24} />
                </Button>
              )}
              {project.github?.backend && (
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  rel="noopener"
                  sx={{ display: "flex", alignItems: "center", gap: 1 , mt: 2}}
                  href={project.github.backend}
                >
                  Back-End <Github size={24} />
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
