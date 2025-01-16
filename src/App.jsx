import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material"; // Importera Box från MUI

const App = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Navbar />
    </Box>
  );
};

export default App;
