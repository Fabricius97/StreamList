import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchTrending } from "../api/tmdb";
import { fetchPopular } from "../api/tmdb";
import Slider from "../components/Slider";
import HeroBackground from "/hero-background.jpg";

const Hero = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const getTrendingData = async () => {
      const data = await fetchTrending();
      setTrending(data);
    };

    getTrendingData();
  }, []);

  useEffect(() => {
    const getPopularData = async () => {
      const data = await fetchPopular();
      setPopular(data);
    };

    getPopularData();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
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
                : HeroBackground
            })`, // Vertikal bakgrund för små skärmar
            sm: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
              selectedItem
                ? `https://image.tmdb.org/t/p/w1280${
                    selectedItem.backdrop_path || selectedItem.poster_path
                  }`
                : HeroBackground
            })`,
          },
        }}
      >
        {!selectedItem ? (
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              textAlign: "center",
              color: "white",
              textShadow: "-1px -1px 50px rgb(0, 0, 0)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "40px", sm: "70px", md: "100px" },
                fontWeight: "bold",
              }}
            >
              StreamList
            </Typography>
          </Box>
        ) : null}
        {selectedItem && (
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: { xs: "0px 40px", md: "20px 150px" },
              borderRadius: "8px",
              display: "flex",
              justifyContent: { xs: "center", md: "start" },
              alignItems: "center",
              height: "100%",
            }}
          >
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
          </Box>
        )}
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
          data={popular}
          setSelectedItem={setSelectedItem}
          title="Popular"
        />
      </Box>
    </Box>
  );
};

export default Hero;
