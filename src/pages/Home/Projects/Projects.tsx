import { Box, Container, Grid, Typography, styled } from "@mui/material";

const Projects = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(4, 0),
    }));
    
    const ProjectBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper, // Altere para uma cor clara que contrasta com primary.main
        color: theme.palette.text.primary, // Use uma cor de texto que tenha bom contraste
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "150px",
    }));

    return (
        <StyledProjects>
            <Container maxWidth="lg">
            <Typography
                variant="h3"
                gutterBottom
                textAlign="center"
                pb={4}
                color="secondary.contrastText" // Altere para a cor desejada do tema
            >
                    Meus Projetos
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <ProjectBox>
                            <Typography variant="h5">Projeto 1</Typography>
                        </ProjectBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProjectBox>
                            <Typography variant="h5">Projeto 2</Typography>
                        </ProjectBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProjectBox>
                            <Typography variant="h5">Projeto 3</Typography>
                        </ProjectBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProjectBox>
                            <Typography variant="h5">Projeto 4</Typography>
                        </ProjectBox>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
