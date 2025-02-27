import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Box, Typography, useTheme } from "@mui/material";
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
  const duplicatedSkills = [...skills, ...skills, ...skills]; // Apenas duplicamos para criar um loop melhor
  const itemWidth = 150 + 16; // Largura do item + margem
  const totalWidth = itemWidth * skills.length; // Usamos apenas a quantidade original de skills para referência

  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const lastTime = useRef<number | null>(null);

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
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

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
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px",
            height: "100%",
            background: `linear-gradient(to right, ${theme.palette.background.default} 0%, transparent 100%)`,
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
            background: `linear-gradient(to left, ${theme.palette.background.default} 0%, transparent 100%)`,
            zIndex: 2,
          }}
        />

        <motion.div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            x,
          }}
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
                boxShadow: theme.shadows[4],
                cursor: "pointer",
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
