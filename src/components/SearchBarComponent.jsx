import { useState } from "react";
import {
  Box,
  Button,
  FilledInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function Searchbar({ setSearchQuery }) {
  return (
    <form onClick={handleSearchSuggestion}>
      <TextField
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        fullWidth
        placeholder="Search course, plant, crop, service"
        size="small"
        sx={{ bgcolor: "common.white", borderRadius: '10px', height: "100%" }}
      />
    </form>
  );
}

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

const data = ["Plant", "Fertilizer", "Shovel"];

export default function SearchBar({ backDrop, slogan }) {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);
  const [suggestion, setSuggestion] = useState(false)

  const handleSearchSuggestion = () => {
    if (!suggestion) {
      setSuggestion(suggestion => !suggestion)
      console.log(suggestion);
      
    }

  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: { xs: "300px", md: "400px" },
      }}
    >
      {backDrop === "black" ? (
        <Box
          height="100%"
          width="100%"
          bgcolor="common.black"
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
      )}

      <Stack
        maxWidth="1180px"
        spacing="30px"
        padding="0 20px"
        sx={{
          position: "absolute",
          width: "100%",
          padding: { xs: "0 20px", md: "0 120px" },
        }}
      >
        {slogan && (
          <Typography
            color="white"
            sx={{ typography: { xs: "blgsm", md: "h4" } }}
          >
            Learn Smarter . Learn Faster . AgTeach
          </Typography>
        )}
        <Box display="flex" gap="20px" width="100%" height="40px">
          <Box sx={{ flexGrow: 1 }}>
            <Searchbar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Box width="100%" bgcolor='white' borderRadius='0 0 10px 10px' style={{ padding: 3 }}>
              {dataFiltered.map((d) => (
                <Typography
                  style={{
                    padding: 5,
                    // justifyContent: "normal",
                    typography: {xs: 'bxsr', md: 'blgsm'},
                    color: "primary",
                    margin: 3,
                    width: "100%",        
                  }}
                  key={d.id}
                >
                  {d}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box sx={{ width: { xs: "80px", sm: "100px", md: "220px" } }}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ height: "100%", color: "primary.main" }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
