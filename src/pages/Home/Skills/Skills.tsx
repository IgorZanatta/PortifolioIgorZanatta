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

    const frontEndSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
    const backEndSkills = ["Java", "Spring Boot", "SQL", "Docker", "Maven"];

    return (
        <StyledSkills>
            <Container maxWidth="lg">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Habilidades
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {/* Front-End Skills */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" textAlign="center" gutterBottom>
                            Front-End
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {frontEndSkills.map((skill, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <SkillBox>{skill}</SkillBox>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Back-End Skills */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" textAlign="center" gutterBottom>
                            Back-End
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {backEndSkills.map((skill, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <SkillBox>{skill}</SkillBox>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
