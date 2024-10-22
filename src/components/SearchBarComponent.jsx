import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = ["Plant", "Fertilizer", "Shovel"];

export const SearchBar = ({ backDrop, searchLabel, searchContext, defaultSearchString }) => {

  if (!searchContext) searchContext = 'search';
  if (!defaultSearchString) defaultSearchString = '';

  const navigate = useNavigate();
  const [searchString, setSearchString] = useState(defaultSearchString);

  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const handleAutocompleteChange = (event, newValue) => {
    setSearchString(newValue || "");
  };

  const handleStartSearch = (e) => {
    e.preventDefault();
    navigate(`/${searchContext}?name=${searchString}`)
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative', 
        height: backDrop
          ? { xs: "200px", md: "300px" }
          : { xs: "auto", md: "auto" },
      }}
    >
      {backDrop &&
        (backDrop === "primary" ? (
          <Box
            height="100%"
            width="100%"
            bgcolor="primary.main"
            position="relative"
          ></Box>
        ) : (
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              position: "relative",
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
          padding: backDrop ? { xs: "0 20px", md: "0 120px" } : '0',
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
            <Autocomplete
              id="search-bar"
              sx={{ width: "100%", height: "40px", mx: "auto" }}
              options={data}
              value={searchString}
              onInputChange={handleAutocompleteChange}
              getOptionLabel={(option) => {
                return option
              }}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box key={key} component="li" {...optionProps}>
                    {option}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => handleSearchString(e)}
                  value={searchString}
                  placeholder="Search course, plant, crop, service"
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      height: "40px",
                      bgcolor: "grey.100",
                      borderRadius: "4px",
                    },
                    endAdornment: null,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />

            <Box sx={{ width: { xs: "80px", sm: "100px", md: "220px" } }}>
              <Button
                onClick={handleStartSearch}
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ height: "100%", color: "primary.main" }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </form>
      </Stack>
    </Box>
  );
}