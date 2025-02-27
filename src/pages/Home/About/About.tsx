import { Box, Container, Grid, Typography, styled } from "@mui/material";
import FadeInSlide from "../../../components/FadeInSlide/FadeInSlide";
import ImageSwitcher from "../../../components/ImageSwitcher/ImageSwitcher";

// Importando as imagens da pasta assets
import Image1 from "../../../assets/ImgSobremim/SIMBOLO ENGENHARIA DA COMPUTAÇÃO 3.jpg";
import Image2 from "../../../assets/ImgSobremim/Ufgd.png";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "60vh", // Aumentei um pouco a altura total da seção
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(6, 0),
  }));

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
    height: "400px", // Aumentei a altura do box para melhor leitura
    maxWidth: "100%",
  }));

  const ScrollableText = styled(Box)({
    maxHeight: "350px", // Aumentei a altura do scroll para mais espaço
    overflowY: "auto",
    paddingRight: "10px",
    textAlign: "justify", // Melhor legibilidade
    fontSize: "1.4ren",
    lineHeight: "10",

    // Estilizando o scrollbar para um design mais moderno e minimalista
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255, 255, 255, 0.5)",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(255, 255, 255, 0.8)",
    },
  });

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Exibição das imagens sem corte e sem fundo branco */}
          <Grid item xs={12} md={6}>
            <FadeInSlide direction="left">
              <ImageSwitcher images={[Image1, Image2]} />
            </FadeInSlide>
          </Grid>

          {/* Texto sobre mim com scroll minimalista */}
          <Grid 
            item 
            xs={12} 
            md={6} 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center"
          >
            <FadeInSlide direction="right">
              <StyledBox>
                <Typography variant="h3" gutterBottom>
                  Sobre
                </Typography>
                <ScrollableText>
                  <Typography variant="body1"  sx={{ fontSize: "1.25rem"}}>
                    Olá! Meu nome é Igor Zanatta Saraiva, sou estudante de Engenharia de Computação na UFGD, com foco em desenvolvimento Back-end. Minha experiência é voltada para Java com Spring Boot, SQL, Front-end integração do React com TypeScript e também tenho um bom entendimento de C e C++, adquiridos ao longo da minha formação.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "1.25rem"}}>
                  Aprendo melhor na prática, aplicando conceitos em projetos reais. Meu TCC é um exemplo claro disso: enquanto desenvolvia o SafraFácil, um sistema de gestão agrícola, eu estava simultaneamente aprendendo e aprofundando meus conhecimentos em back-end. Desde a escolha da linguagem até sua implementação, cada etapa do projeto foi uma oportunidade para testar, errar e evoluir.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "1.25rem"}}>
                  Atualmente, estou no início da minha carreira, buscando uma oportunidade como desenvolvedor júnior ou estagiário, onde possa aplicar meus conhecimentos, ajudar na manutenção e melhoria de sistemas existentes e continuar aprimorando minhas habilidades. Meu objetivo é me tornar um profissional sólido na área de desenvolvimento de software, adquirindo cada vez mais experiência e especialização.                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "1.25rem"}}>
                  Tenho um bom raciocínio lógico, sou analítico e gosto de resolver problemas de forma estruturada. Desafios técnicos me motivam, e estou sempre disposto a aprender e experimentar novas soluções. Para mim, programação não é apenas escrever código, mas entender problemas e criar soluções eficientes.
                  </Typography>
                </ScrollableText>
              </StyledBox>
            </FadeInSlide>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
