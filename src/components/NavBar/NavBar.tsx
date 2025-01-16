import { AppBar, Toolbar, IconButton, Menu, MenuItem, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const StyledAppBar = styled(AppBar)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        zIndex: theme.zIndex.drawer + 1, // Garante que o NavBar fique acima de outros elementos
    }));

    return (
        <>
            <StyledAppBar position="fixed"> {/* Alterado para "fixed" */}
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
                    >
                        <MenuItem onClick={handleMenuClose}>About</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Skills</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
                    </Menu>
                </Toolbar>
            </StyledAppBar>
        </>
    );
};

export default NavBar;
