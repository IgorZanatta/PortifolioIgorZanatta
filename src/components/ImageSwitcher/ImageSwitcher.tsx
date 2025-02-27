import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

interface ImageSwitcherProps {
  images: string[];
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "450px", // Define um tamanho máximo razoável para ambas as imagens
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={images[currentIndex]}
        alt="Imagem sobre mim"
        style={{
          width: "100%", // Ocupa toda a largura do container
          height: "auto",
          maxHeight: "300px", // Define uma altura máxima para manter a proporção
          objectFit: "contain", // Garante que a imagem inteira seja exibida sem cortes
          transition: "opacity 0.5s ease-in-out",
          opacity: fade ? 1 : 0,
        }}
      />
    </Box>
  );
};

export default ImageSwitcher;
