import { Box, Container, Grid, Typography, styled } from "@mui/material";
import SkillsCarousel from "../../../components/SkillsCarousel/SkillsCarousel"; // Importando o carrossel animado
import HtmlIcon from "../../../components/ImagensPNG/Html.png";
import CssIcon from "../../../components/ImagensPNG/css.png";
import JsIcon from "../../../components/ImagensPNG/JavaScript.png";
import TsIcon from "../../../components/ImagensPNG/TypeScript.png";
import ReactIcon from "../../../components/ImagensPNG/React.png";

import JavaIcon from "../../../components/ImagensPNG/Java.png";
import SpringBootIcon from "../../../components/ImagensPNG/SpringBoot.png";
import SqlIcon from "../../../components/ImagensPNG/SQL.png";
import DockerIcon from "../../../components/ImagensPNG/Docker.png";

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4),
    }));

    const frontEndSkills = [
        { name: "HTML", image: HtmlIcon },
        { name: "CSS", image: CssIcon },
        { name: "JavaScript", image: JsIcon },
        { name: "TypeScript", image: TsIcon },
        { name: "React", image: ReactIcon },
      ];
      
      const backEndSkills = [
        { name: "Java", image: JavaIcon },
        { name: "Spring Boot", image: SpringBootIcon },
        { name: "SQL", image: SqlIcon },
        { name: "Docker", image: DockerIcon },
      ];
      

    return (
        <StyledSkills>
            <Container maxWidth="lg">
                {/* Adicionando marginBottom no título */}
                <Typography variant="h3" textAlign="center" gutterBottom sx={{ marginBottom: 6 }}>
                    Habilidades
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Adicionando marginTop no primeiro carrossel para mais espaço */}
                    <Box sx={{ width: "100%", marginTop: 4 }}>
                        <SkillsCarousel skills={backEndSkills} title="Back-End" />
                    </Box>

                    <SkillsCarousel skills={frontEndSkills} title="Front-End" />
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
