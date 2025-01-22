import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StreamCard from "../components/StreamCard";
import { fetchTrending } from "../api/tmdb";

const Hero = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrendingData = async () => {
      const data = await fetchTrending();
      setTrending(data);
    };

    getTrendingData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "55vh",
        }}
      >
        Bakrund
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "0 50px" }}>
        <Box sx={{ display: "flex", textAlign: "left", width: "100%" }}>
          <Typography variant="h4" color="inherit">
            Trending
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {trending.map((item) => (
            <StreamCard key={item.id} data={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
