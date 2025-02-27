import { AppBar, Toolbar, IconButton, Menu, MenuItem, styled, useMediaQuery, Typography, Box, Container, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface NavBarProps {
  scrollToSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 900px)");

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
    width: "100%",
    margin: 0,
    padding: 0,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  }));

  const menuItems = [
    { label: "Início", section: "hero" },
    { label: "Sobre", section: "about" },
    { label: "Habilidades", section: "skills" },
    { label: "Projetos", section: "projects" },
    { label: "Contato", section: "contact" },
  ];

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  maxHeight: "70vh", // Aumentando a altura do menu para melhor exibição
                  width: "240px", // Largura um pouco maior para destaque
                  textAlign: "center", // Centraliza os textos no menu
                  borderRadius: "12px", // Bordas arredondadas para um design mais limpo
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Efeito de sombra elegante
                  background: "rgba(0, 0, 0, 0.8)", // Menu com um leve fundo escuro translúcido
                  backdropFilter: "blur(5px)", // Efeito de desfoque no fundo
                  color: "white", // Cor do texto branca para contraste
                },
              }}
            >
              {menuItems.map((item, index) => (
                <div key={item.section}>
                  <MenuItem
                    onClick={() => {
                      scrollToSection(item.section);
                      handleMenuClose();
                    }}
                    sx={{
                      justifyContent: "center", // Centraliza os textos dentro do menu
                      fontSize: "1.2rem", // Tamanho um pouco maior do texto
                      "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" }, // Leve efeito ao passar o mouse
                    }}
                  >
                    {item.label}
                  </MenuItem>
                  {index !== menuItems.length - 1 && (
                    <Divider
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // Risco discreto abaixo de cada item
                        marginX: "20px", // Mantém as bordas suaves
                      }}
                    />
                  )}
                </div>
              ))}
            </Menu>
          </>
        ) : (
          <Container>
            <Box display="flex" justifyContent="center" gap={14}>
              {menuItems.map((item) => (
                <Typography
                  key={item.section}
                  variant="h6"
                  onClick={() => scrollToSection(item.section)}
                  sx={{ cursor: "pointer", color: "white", "&:hover": { opacity: 0.7 } }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Container>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
