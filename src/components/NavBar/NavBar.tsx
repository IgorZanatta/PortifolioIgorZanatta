import { AppBar, Toolbar, IconButton, Menu, MenuItem, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface NavBarProps {
  scrollToSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
  }));

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                maxHeight: "50vh", // Limite de altura para evitar overflow
                width: "200px", // Largura do menu
              },
            }}
          >
            <MenuItem
              onClick={() => {
                scrollToSection("hero");
                handleMenuClose();
              }}
            >
              Início
            </MenuItem>
            <MenuItem
              onClick={() => {
                scrollToSection("about");
                handleMenuClose();
              }}
            >
              Sobre
            </MenuItem>
            <MenuItem
              onClick={() => {
                scrollToSection("skills");
                handleMenuClose();
              }}
            >
              Habilidades
            </MenuItem>
            <MenuItem
              onClick={() => {
                scrollToSection("projects");
                handleMenuClose();
              }}
            >
              Projetos
            </MenuItem>
            <MenuItem
              onClick={() => {
                scrollToSection("contact");
                handleMenuClose();
              }}
            >
              Contato
            </MenuItem>
          </Menu>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
