import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StreamCard from "../components/StreamCard";
import { fetchTrending } from "../api/tmdb";

const Hero = () => {
  const [trending, setTrending] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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
          height: "70vh",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.7)
    ), url(${
      selectedItem
        ? `https://image.tmdb.org/t/p/w1280${
            selectedItem.backdrop_path || selectedItem.poster_path
          }`
        : "https://via.placeholder.com/1280x720"
    })`,
        }}
      >
        {" "}
        {/* Visar vald titel och beskrivning */}
        {selectedItem ? (
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h3" color="white">
              {selectedItem.title}
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ marginTop: "10px" }}
            >
              {selectedItem.description}
            </Typography>
          </Box>
        ) : (
          <Typography variant="h4" color="white">
            Välj en film eller serie
          </Typography>
        )}
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
            <StreamCard
              key={item.id}
              data={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
