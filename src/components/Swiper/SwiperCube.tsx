import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import { Typography, Box, styled } from "@mui/material";

interface SwiperCubeProps {
  texts: string[]; // Lista de textos para exibição no Swiper
}

// Estilizando o Box principal para manter o efeito original e ser responsivo
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[6],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "400px", // Altura padrão para telas grandes
  width: "100%",
  maxWidth: "500px",

  [theme.breakpoints.down("sm")]: {
    height: "250px",
    width: "90%",
    maxWidth: "300px",
    padding: theme.spacing(2),
  },
}));

// Novo Box para destacar o texto dentro de um quadrado mais arredondado e com a cor secundária
const HighlightBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main, 
  color: theme.palette.secondary.contrastText, 
  padding: theme.spacing(3), 
  borderRadius: "24px", 
  boxShadow: theme.shadows[4], 
  border: `2px solid ${theme.palette.secondary.dark}`, 
  display: "flex",
  flexDirection: "column", // Mantém a organização vertical
  alignItems: "center",
  textAlign: "justify",
  width: "80%", 
  maxWidth: "400px",
  minHeight: "120px", // Garante um tamanho mínimo
  
  // Em telas menores, ativa o scroll e evita textos colados no topo
  [theme.breakpoints.down("sm")]: {
    maxHeight: "150px", 
    overflowY: "auto", 
  },
}));


// Estilizando o texto para se ajustar a telas menores
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  marginTop: "auto", // Mantém o espaçamento no topo apenas quando necessário
  marginBottom: "auto", // Centraliza automaticamente
  paddingTop: theme.spacing(1), // Pequeno espaçamento extra no topo do texto

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));


const SwiperCube: React.FC<SwiperCubeProps> = ({ texts }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "500px", height: "auto" }}>
      <Swiper
        effect="cube"
        grabCursor={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCube, Autoplay]}
        style={{ width: "100%", height: "auto" }}
      >
        {texts.map((text, index) => (
          <SwiperSlide key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <StyledBox>
              <Typography variant="h3" gutterBottom>
                Sobre
              </Typography>
              {/* Novo destaque ao redor do texto */}
              <HighlightBox>
                <StyledTypography variant="body1">
                  {text}
                </StyledTypography>
              </HighlightBox>
            </StyledBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperCube;
