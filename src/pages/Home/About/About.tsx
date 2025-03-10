import { Container, Grid, styled } from "@mui/material";
import FadeInSlide from "../../../components/FadeInSlide/FadeInSlide";
import ImageSwitcher from "../../../components/ImageSwitcher/ImageSwitcher";
import SwiperCube from "../../../components/Swiper/SwiperCube"; // Importação do novo componente

// Importando as imagens da pasta assets
import Image1 from "../../../assets/ImgSobremim/Simbolo-Engenharia-Computacao.png";
import Image2 from "../../../assets/ImgSobremim/Ufgd.png";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(6, 0),
    position: "relative",
    margin: 0, // Remove qualquer espaçamento extra
    paddingTop: 0, // Remove qualquer espaço extra no topo
  }));
  

  const aboutTexts = [
    "Olá! Meu nome é Igor Zanatta Saraiva, sou estudante de Engenharia de Computação na UFGD, com foco no desenvolvimento Back-end.",

    "Minhas principais tecnologias incluem Java com Spring Boot, SQL e integração entre serviços com React e TypeScript. Além disso, possuo conhecimento em C e C++, o que me proporcionou uma base sólida em lógica de programação e estrutura de dados.",

    "Durante o desenvolvimento do SafraFácil, um sistema de gestão agrícola criado para meu TCC, aprofundei meus conhecimentos em back-end, segurança e integração de APIs. O projeto me permitiu trabalhar com autenticação via JWT, geração de relatórios e estruturação de um sistema multiusuário.",

  "Tenho um raciocínio lógico estruturado e foco na escrita de código limpo e bem organizado. Valorizo boas práticas no desenvolvimento de software e procuro compreender não apenas a implementação, mas também a arquitetura e a eficiência das soluções."
];



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

          {/* Texto sobre mim dentro do Swiper */}
          <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <FadeInSlide direction="right">
              <SwiperCube texts={aboutTexts} /> {/* Agora o efeito 3D acontece com todo o quadrado */}
            </FadeInSlide>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
