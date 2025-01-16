import React from "react";
import { AppBar, Toolbar, Link, Box, Typography } from "@mui/material";
import navData from "../data/navbar.json";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navLinks = navData.navbar; // Hämta arrayen från objektet

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box>
          <Typography variant="h6" color="inherit">
            StreamList
          </Typography>
        </Box>
        <Box display="flex" gap={2} flexGrow={1}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              underline="none"
              color="inherit"
              sx={{
                fontSize: "1rem",
                "&:hover": {
                  color: "#A6A7A8",
                },
              }}
            >
              {link.name}
            </Link>
          ))}
        </Box>
        <Box>
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
