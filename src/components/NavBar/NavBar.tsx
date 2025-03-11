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

  const handleClick = (section: string) => {
    scrollToSection(section);
    handleMenuClose();
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
                  maxHeight: "70vh",
                  width: "240px",
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  background: "rgba(0, 0, 0, 0.8)",
                  backdropFilter: "blur(5px)",
                  color: "white",
                },
              }}
            >
              {menuItems.map((item, index) => (
                <div key={item.section}>
                  <MenuItem
                    onClick={() => handleClick(item.section)}
                    sx={{
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                  {index !== menuItems.length - 1 && (
                    <Divider
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        marginX: "20px",
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
                  onClick={() => handleClick(item.section)}
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
