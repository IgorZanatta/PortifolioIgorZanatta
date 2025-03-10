import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/Igor.jpg";
import Curriculo from "../../../assets/Cv/Curriculo Igor Zanatta Saraiva.pdf";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

interface HeroProps {
  scrollToContactMe: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContactMe }) => {
    const StyledHero = styled("div")(({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      height: "105vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px",
      position: "relative", // Necessário para o efeito abaixo
    
      "::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "10px", // Altura do efeito
        background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(202, 233, 255, 1))",
        zIndex: 1,
      },
    }));

    const StyledImgContainer = styled(Box)({
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
  
    const StyledImg = styled("img")(({ theme }) => ({
      width: "80%",
      maxWidth: "250px",
      borderRadius: "50%",
      position: "relative",
      zIndex: 2,
      [theme.breakpoints.up("md")]: {
        maxWidth: "350px",
      },
    }));
  
    const BlurEffect = styled("div")(({ theme }) => ({
      position: "absolute",
      width: "90%",
      height: "90%",
      maxWidth: "270px",
      maxHeight: "270px",
      borderRadius: "50%",
      background: theme.palette.primary.contrastText,
      filter: "blur(20px)",
      zIndex: 1,
      [theme.breakpoints.up("md")]: {
        maxWidth: "370px",
        maxHeight: "370px",
      },
    }));
  
  
    const StyledTypography = styled(Typography)(({ theme }) => ({
      color: theme.palette.primary.contrastText,
      marginBottom: theme.spacing(2),
      fontSize: "2rem",
      fontWeight: 600,
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
    }));
  
    const StyledButtonWrapper = styled(Grid)(({ theme }) => ({
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    }));
  
    return (
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-170} right={0}>
                  <AnimatedBackground />
                </Box>
                <StyledImgContainer>
                <BlurEffect />
                <StyledImg src={Avatar} />
              </StyledImgContainer>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center" // Centraliza os textos verticalmente
              textAlign="center" // Centraliza o texto horizontalmente
            >
              <StyledTypography variant="h1">Igor Zanatta Saraiva</StyledTypography>
              <StyledTypography variant="h2">Desenvolvedor Back-end</StyledTypography>
              <StyledButtonWrapper container spacing={3}>
                <Grid item>
                  <StyledButton
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = Curriculo;
                      link.download = "Igor_Zanatta_Saraiva_CV.pdf";
                      link.click();
                    }}
                  >
                    <DownloadIcon />
                    <Typography>Currículo</Typography>
                  </StyledButton>
                </Grid>
                <Grid item>
                  <StyledButton onClick={scrollToContactMe}>
                    <MailOutlineIcon />
                    <Typography>Entre em Contato</Typography>
                  </StyledButton>
                </Grid>
              </StyledButtonWrapper>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    );
  };
  
  export default Hero;
  