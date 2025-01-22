import React from "react";
import { Box, Link } from "@mui/material";

const HamburgerMenu = ({ links, toggleMenu }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#555",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{ textAlign: "center" }}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            underline="none"
            color="inherit"
            sx={{
              fontSize: "1.5rem",
              "&:hover": {
                color: "#A6A7A8",
              },
            }}
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default HamburgerMenu;
