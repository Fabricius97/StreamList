import { Box, Typography } from "@mui/material";
import React from "react";

const StreamCard = ({ data, onClick }) => {
  const extractYear = (dateString) => {
    return dateString ? new Date(dateString).getFullYear() : "Unknown Date";
  };
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        gap: "10px",
        borderRadius: "8px",
        backgroundColor: "rgba(27, 27, 27, 0.3)",
        color: "white",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        component="img"
        src={
          `https://image.tmdb.org/t/p/w300${data?.backdrop_path}` ||
          "https://via.placeholder.com/200x300"
        }
        alt={data?.title || data?.name || "Unknown Title"}
        sx={{
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <Box sx={{ padding: "0 10px" }}>
        <Typography variant="p" color="inherit" noWrap>
          {data?.title || data?.name || "Unknown Title"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body2" color="inherit">
            {extractYear(data?.release_date || data?.first_air_date)}
          </Typography>
          <Typography variant="body2" color="inherit">
            IMDb: {data?.vote_average || "N/A"}
          </Typography>
        </Box>
        <Typography variant="body2" color="inherit">
          {data?.media_type || ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default StreamCard;
