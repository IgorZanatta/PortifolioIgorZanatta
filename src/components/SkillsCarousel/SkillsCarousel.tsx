import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Box, Typography, useTheme, styled } from "@mui/material"; // ✅ Importando styled corretamente
import { useState, useRef } from "react";

interface Skill {
  name: string;
  image: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
  title: string;
  speedMultiplier?: number;
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills, title, speedMultiplier = 1 }) => {
  const theme = useTheme();
  const duplicatedSkills = [...skills, ...skills, ...skills]; // Duplicamos para criar um loop contínuo
  const itemWidth = 150 + 16; // Largura do item + margem
  const totalWidth = itemWidth * skills.length; // Consideramos apenas a lista original para calcular o loop

  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const lastTime = useRef<number | null>(null);

  // Animação automática
  useAnimationFrame((time) => {
    if (!isPaused) {
      if (lastTime.current !== null) {
        const deltaTime = (time - lastTime.current) / 1000;
        const distance = (75 * deltaTime * speedMultiplier) * -1;
        x.set((x.get() + distance) % totalWidth);
      }
    }
    lastTime.current = time;
  });

  const StyledCarouselTitle = styled(Typography)(() => ({
    fontWeight: 600, // Menos espesso que o título Habilidades (700)
    letterSpacing: "0.5px", // Ajuste sutil no espaçamento para melhor leitura
    color: theme.palette.primary.main, // Mantém a cor do tema para uniformidade
  }));
  

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 4,
        position: "relative",
      }}
    >
      <StyledCarouselTitle variant="h4" gutterBottom>
        {title}
      </StyledCarouselTitle>


      <Box
        sx={{
          width: "100%",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradientes laterais */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px",
            height: "100%",
            background: `linear-gradient(to right, ${theme.palette.secondary.main} 0%, transparent 100%)`,
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100px",
            height: "100%",
            background: `linear-gradient(to left, ${theme.palette.secondary.main} 0%, transparent 100%)`,
            zIndex: 2,
          }}
        />

        {/* Carrossel com arraste manual */}
        <motion.div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            x,
          }}
          drag="x"
          dragConstraints={{ left: -totalWidth, right: 0 }} // Limite de arraste
          onDragStart={() => setIsPaused(true)} // Pausa animação ao arrastar
          onDragEnd={() => setIsPaused(false)} // Retoma animação ao soltar
        >
          {duplicatedSkills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                minWidth: 150,
                padding: 2,
                marginX: 1,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                borderRadius: 2,
                textAlign: "center",
                fontWeight: "bold",
                boxShadow: `0px 4px 10px rgba(202, 233, 255, 0.6)`,
                cursor: "grab",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src={skill.image}
                  alt={skill.name}
                  style={{ width: 30, height: 30 }}
                />
                {skill.name}
              </Box>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default SkillsCarousel;
