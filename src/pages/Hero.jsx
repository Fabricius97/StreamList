import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchTrending } from "../api/tmdb";
import Slider from "../components/Slider";

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
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
            selectedItem
              ? `https://image.tmdb.org/t/p/w1280${
                  selectedItem.backdrop_path || selectedItem.poster_path
                }`
              : "https://via.placeholder.com/1280x720"
          })`,
        }}
      >
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

      {/* Slider */}
      <Slider
        data={trending}
        setSelectedItem={setSelectedItem}
        title="Trending"
      />
    </Box>
  );
};

export default Hero;
