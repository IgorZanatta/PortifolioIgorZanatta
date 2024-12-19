import {Box, Container, Grid, styled, Typography } from "@mui/material"
import eu from "../../../../assets/images/PortifolioIMG.jpg"
import DownloadIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const  Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main, // Altere o .primary para .primary.main se necessário
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }));

    const StyledImg = styled("img")(({ theme })=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))


    return (
      <>
          <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"180%"} top={-100} right={0}>
                                <AnimatedBackground></AnimatedBackground>
                            </Box>
                        </Box>
                        <Box position="relative" textAlign="center">
                            <StyledImg src={eu} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="secondary" variant="h1" textAlign="center" pb={2}>Igor Zanatta Saraiva</Typography>
                        <Typography color="secondary" variant="h2" textAlign="center">I'm a Software develop</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon/>
                                    <Typography>
                                        Dowload CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton>
                                <EmailIcon/>
                                <Typography>
                                    Meu Contato
                                </Typography>
                            </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
          </StyledHero>
        
      </>
    )
  }
  
  export default Hero

  