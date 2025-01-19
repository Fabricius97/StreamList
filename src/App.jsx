import React from "react";
import { Routes, Route } from "react-router-dom"; // Inget BrowserRouter här
import { Box } from "@mui/material";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Hero from "./pages/Hero";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
