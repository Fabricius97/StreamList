import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import StreamCard from "../components/StreamCard";

const Slider = ({ data, setSelectedItem, title }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px 0",
      }}
    >
      {/* Title */}
      {title && (
        <Box sx={{ marginBottom: "10px", textAlign: "left" }}>
          <Typography variant="h5" color="white">
            {title}
          </Typography>
        </Box>
      )}

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Default number of visible slides
        breakpoints={{
          320: { slidesPerView: 1 }, // Small screens
          768: { slidesPerView: 2 }, // Medium screens
          1200: { slidesPerView: 4 }, // Large screens
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Box onClick={() => setSelectedItem(item)}>
              <StreamCard data={item} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
