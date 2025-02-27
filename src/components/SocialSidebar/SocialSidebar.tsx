import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const SocialSidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Box
      component={motion.div}
      animate={{
        right: isOpen || !isMobile ? "16px" : "-60px", // Move para dentro ou fora da tela no mobile
      }}
      transition={{ duration: 0.3 }}
      sx={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "8px",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        zIndex: 5,
      }}
    >
      {/* Botão de abrir/fechar no mobile, agora movendo junto com a barra */}
      {isMobile && (
        <IconButton
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          position: "absolute",
          left: "-40px", // Mantém a seta sempre à esquerda da barra
          top: "50%",
          transform: "translateY(-50%)",
          color: "black", // Ícone preto
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <ArrowBackIosNewIcon
            fontSize="small"
            sx={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", // Gira a seta quando abre/fecha
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </IconButton>
      )}

      {/* Ícones de redes sociais */}
      <IconButton
        component="a"
        href="https://github.com/IgorZanatta"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#333" }}
      >
        <Github size={24} />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/igor-zanatta-saraiva-35323a210/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#0077b5" }}
      >
        <Linkedin size={24} />
      </IconButton>

      <IconButton
        component="a"
        href="https://instagram.com/Igor_Zanattal"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#E4405F" }}
      >
        <Instagram size={24} />
      </IconButton>
    </Box>
  );
};

export default SocialSidebar;
