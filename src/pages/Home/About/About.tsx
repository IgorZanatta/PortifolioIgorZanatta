import { Box, Container, Grid, Typography, styled } from "@mui/material";

const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(4, 0),
    }));

    const StyledBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],
    }));

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "300px",
                                backgroundColor: "#e0e0e0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        >
                            <Typography variant="h4" color="textSecondary">
                                Espaço para imagem ou conteúdo
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledBox>
                            <Typography variant="h3" gutterBottom>
                                Sobre Mim
                            </Typography>
                            <Typography variant="body1">
                                Sou desenvolvedor especializado em back-end com foco em criar sistemas eficientes e escaláveis. Atualmente, estou ampliando meus conhecimentos em análise de dados e outras tecnologias emergentes.
                            </Typography>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;