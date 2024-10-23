import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({
  backDrop,
  searchLabel,
  searchContext,
  defaultSearchString,
}) => {
  if (!searchContext) searchContext = "search";
  if (!defaultSearchString) defaultSearchString = "";

  const navigate = useNavigate();
  const [searchString, setSearchString] = useState(defaultSearchString);

  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const handleStartSearch = (e) => {
    e.preventDefault();
    navigate(`/${searchContext}?name=${searchString}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: backDrop
          ? { xs: "200px", md: "300px" }
          : { xs: "200px", md: "200px" },
      }}
    >
      {backDrop &&
        (backDrop === "primary" ? (
          <Box
            height="100%"
            width="100%"
            bgcolor="primary.main"
            position="relative"
          />
        ) : (
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={backDrop}
          />
        ))}
      <Stack
        maxWidth="1180px"
        spacing="30px"
        padding="0 20px"
        sx={{
          position: backDrop ? "absolute" : "static",
          width: "100%",
          padding: backDrop ? { xs: "0 20px", md: "0 120px" } : "0",
        }}
      >
        {searchLabel && (
          <Typography
            color="white"
            sx={{ typography: { xs: "blgsm", md: "h4" } }}
          >
            {searchLabel}
          </Typography>
        )}
        <form onSubmit={handleStartSearch}>
          <Box display="flex" gap="20px" width="100%" height="40px">
            <TextField
              id="search-bar"
              sx={{
                width: "100%",
                height: "50px",
                mx: "auto",
                bgcolor: "grey.100",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                },
              }}
              value={searchString} // Controlled value
              onChange={(e) => handleSearchString(e)} // Handle input change
              placeholder="Search course, plant, crop, service"
            />

            <Box sx={{ width: { xs: "80px", sm: "100px", md: "220px" } }}>
              <Button
                onClick={handleStartSearch}
                fullWidth
                disableElevation
                variant="contained"
                color="secondary"
                // sx={{ height: "100%", color: "primary.main" }}
                size="large"
                sx={{ height: "50px" }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};
