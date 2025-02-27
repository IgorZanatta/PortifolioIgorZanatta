import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface ProximaAutoProps {
  images: string[];
}

const ProximaAuto: React.FC<ProximaAutoProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      position="relative"
      borderRadius="12px"
      overflow="hidden"
      width="100%"
      maxWidth="1000px"
      height="auto"
      maxHeight="60vh"
      minHeight="300px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={images[currentImageIndex]}
        alt={`Imagem ${currentImageIndex + 1}`}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "60vh",
          minHeight: "300px",
          objectFit: "contain",
          display: "block",
          borderRadius: "12px",
          transition: "all 0.3s ease-in-out",
        }}
      />

      {/* Botões de Navegação */}
      <Button
        onClick={handlePrevImage}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          minWidth: "unset",
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
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          minWidth: "unset",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <NavigateNextIcon />
      </Button>
    </Box>
  );
};

export default ProximaAuto;
