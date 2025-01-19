import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router";
import navData from "../data/navbar.json";
import SearchBar from "./SearchBar";
// import HamburgerMenu from "./HamburgerMenu";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const navLinks = navData.navbar;
  const isMobile = useMediaQuery("(max-width:768px)");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6">StreamList</Typography>
          </Link>
        </Box>
        {!isMobile ? (
          <Box display="flex" gap={2}>
            {navLinks.map((link) => (
              <Link
                to={link.path} // Använd to för React Router
                key={link.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1rem",
                }}
                onMouseOver={(e) => (e.target.style.color = "#A6A7A8")}
                onMouseOut={(e) => (e.target.style.color = "inherit")}
              >
                {link.name}
              </Link>
            ))}
          </Box>
        ) : (
          <Box display="flex">
            <SearchBar />
            <IconButton
              aria-label="menu"
              color="inherit"
              size="large"
              onClick={toggleMenu}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </Box>
        )}
        {!isMobile && (
          <Box>
            <SearchBar />
          </Box>
        )}
        {menuOpen && <HamburgerMenu links={navLinks} />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
