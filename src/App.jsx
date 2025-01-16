import React from "react";
import { Button, Typography } from "@mui/material";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h3" color="primary">
        Welcome to my Movie Website
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
};

export default App;
