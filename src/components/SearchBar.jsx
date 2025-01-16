import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        variant="standard"
        value={searchQuery}
        onChange={handleSearchChange}
        label="Search"
        sx={{
          color: "#f5f5f5",
        }}
      />
    </Box>
  );
};

export default SearchBar;
