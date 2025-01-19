import { Box, Link } from "@mui/material";
import React from "react";

const HamburgerMenu = ({ links }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#555",
        position: "absolute",
        top: "0",
        right: "0",
      }}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        {links.map((link) => (
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
    </Box>
  );
};

export default HamburgerMenu;
