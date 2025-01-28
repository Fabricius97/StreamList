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
          backgroundImage: {
            xs: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
              selectedItem
                ? `https://image.tmdb.org/t/p/w500${
                    selectedItem.poster_path || selectedItem.backdrop_path
                  }`
                : "https://via.placeholder.com/500x750"
            })`, // Vertikal bakgrund för små skärmar
            sm: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
              selectedItem
                ? `https://image.tmdb.org/t/p/w1280${
                    selectedItem.backdrop_path || selectedItem.poster_path
                  }`
                : "https://via.placeholder.com/1280x720"
            })`, // Horisontell bakgrund för större skärmar
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: { xs: "0px 40px", md: "20px 150px" },
            borderRadius: "8px",
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
            height: "100%", // För att centrera i hela container-boxen
          }}
        >
          {selectedItem ? (
            <Box
              sx={{
                textAlign: { xs: "center", md: "start" },
                maxWidth: "400px",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "50px" },
                  color: "white",
                }}
              >
                {selectedItem.title}
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{ marginTop: "10px" }}
              >
                {selectedItem.overview}
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  background:
                    "linear-gradient(90deg,rgb(6, 0, 88),rgb(133, 133, 133))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                  letterSpacing: "2px",
                }}
              >
                StreamList
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: "-180px",
        }}
      >
        <Slider
          data={trending}
          setSelectedItem={setSelectedItem}
          title="Trending"
        />
      </Box>
    </Box>
  );
};

export default Hero;
