import { Box, Button, Container, Grid, TextField, Typography, styled } from "@mui/material";

const ContactMe = () => {
    const StyledContactMe = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(4),
    }));

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Mensagem enviada");
    };

    return (
        <StyledContactMe>
            <Container maxWidth="md">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Entre em Contato
                </Typography>
                <Typography variant="body1" textAlign="center" pb={4}>
                    Preencha o formulário abaixo para enviar uma mensagem ou entre em contato diretamente por e-mail ou celular.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Seu Nome"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Seu E-mail"
                                variant="outlined"
                                type="email"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Mensagem"
                                variant="outlined"
                                multiline
                                rows={6}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <Button variant="contained" color="primary" type="submit">
                                Enviar Mensagem
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Box mt={4} textAlign="center">
                    <Typography variant="h6">Ou entre em contato diretamente:</Typography>
                    <Typography variant="body1">
                        <a href="mailto:seuemail@example.com" style={{ textDecoration: "none", color: "#1976d2" }}>
                            seuemail@example.com
                        </a>
                    </Typography>
                    <Typography variant="body1">+55 (99) 99999-9999</Typography>
                </Box>
            </Container>
        </StyledContactMe>
    );
};

export default ContactMe;
