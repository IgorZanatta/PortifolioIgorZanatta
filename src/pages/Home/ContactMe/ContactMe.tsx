import { Box, Button, Container, Grid, TextField, Typography, styled } from "@mui/material";
import { sendEmail } from "../../../components/Email/SendEmail";
import EmailIcon from '@mui/icons-material/Email';

const ContactMe = () => {
    const StyledContactMe = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(4),
    }));

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Captura os valores dos campos ao enviar
        const form = event.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        try {
            const success = await sendEmail(name, email, message);
            if (success) {
                alert("Mensagem enviada com sucesso!");
                form.reset(); // Limpa os campos do formulário
            } else {
                alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
            }
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
    };

    return (
        <StyledContactMe>
            <Container maxWidth="md">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Entre em Contato
                </Typography>
                <Typography variant="body1" textAlign="center"  sx={{ 
                fontSize: "1.1rem" 
                
              }} pb={4}>
                    Envie uma mensagem ou entre em contato diretamente por e-mail ou celular.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Seu Nome"
                                name="name" // Nome do campo usado para capturar o valor
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Seu E-mail"
                                name="email" // Nome do campo usado para capturar o valor
                                type="email"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Mensagem"
                                name="message" // Nome do campo usado para capturar o valor
                                variant="outlined"
                                multiline
                                rows={6}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <Button variant="contained" 
                            color="primary" 
                            type="submit"
                            sx={{ alignItems: "center", gap: 1 }} // Adiciona espaço entre ícone e texto
                        >
                                Enviar <EmailIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Box mt={4} textAlign="center">
                    <Typography variant="h6">Entre em contato diretamente:</Typography>
                    <Typography variant="body1">
                        <a href="mailto:zanatta2014@outlook.com" style={{ textDecoration: "none", color: "#1976d2" }}>
                            zanatta2014@outlook.com
                        </a>
                    </Typography>
                    <Typography variant="body1">
                        <a 
                        href="https://wa.me/5567996005595" 
                        style={{ textDecoration: "none", color: "#1976d2" }}
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        +55 (67) 99600-5595
                        </a>
                    </Typography>
                </Box>
            </Container>
        </StyledContactMe>
    );
};

export default ContactMe;
