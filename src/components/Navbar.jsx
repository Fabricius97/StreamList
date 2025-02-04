import React, { useEffect, useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import HamburgerMenu from "./HamburgerMenu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const navLinks = navData.navbar;
  const isMobile = useMediaQuery("(max-width:768px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
          transition: "background-color 0.3s ease-in-out",
          padding: { xs: "0 10px", md: "0 150px" },
        }}
      >
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
                  to={link.path}
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
                sx={{ zIndex: 1200 }}
              >
                {menuOpen ? (
                  <CloseIcon fontSize="inherit" />
                ) : (
                  <MenuIcon fontSize="inherit" />
                )}
              </IconButton>
            </Box>
          )}
          {!isMobile && (
            <Box>
              <SearchBar />
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && menuOpen && (
        <HamburgerMenu
          links={navLinks}
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
        />
      )}
    </>
  );
};

export default Navbar;
