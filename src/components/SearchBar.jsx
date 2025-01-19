import React, { useState } from "react";
import { TextField, Box, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    // Stäng sökfältet om det inte finns någon input
    if (!searchQuery) {
      setIsExpanded(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      {/* Visa bara ikonen om textfältet inte är expanderat */}
      {!isExpanded && (
        <IconButton
          onClick={handleSearchClick}
          edge="start"
          sx={{
            color: "#fff",
            width: "35px",
            padding: "0px",
          }}
        >
          <SearchIcon />
        </IconButton>
      )}

      {/* Visa textfältet bara om det är expanderat */}
      {isExpanded && (
        <TextField
          variant="standard"
          value={searchQuery}
          onChange={handleSearchChange}
          onBlur={handleBlur}
          placeholder="Search"
          InputProps={{
            style: { color: "#fff" },
          }}
          sx={{
            width: "200px", // Fast bredd för expanderat läge
            transition: "width 0.3s ease-in-out", // Animering
            overflow: "hidden",
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #fff", // Underlinje i normalt läge
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "1px solid #fff", // Underlinje vid hover
            },
            "& .MuiInput-underline:after": {
              borderBottom: "1px solid #fff", // Underlinje vid fokus
            },
          }}
        />
      )}
    </Box>
  );
};

export default SearchBar;
