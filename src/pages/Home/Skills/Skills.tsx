import { Box, Container, Grid, Typography, styled } from "@mui/material";

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: "30vh",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(4),
    }));

    const SkillBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1rem",
    }));

    const skills = [
        "Java",
        "Spring Boot",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Docker",
        "Maven",
        "SQL",
    ];

    return (
        <StyledSkills>
            <Container maxWidth="lg">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Habilidades
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <SkillBox>{skill}</SkillBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;