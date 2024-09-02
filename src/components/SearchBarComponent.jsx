import { useState } from "react";
import { Box, Button, FilledInput, Stack, TextField } from "@mui/material";
import search from "../assets/Home/search.png";

function Searchbar({ setSearchQuery }) {
  return (
    <form>
      <TextField
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        fullWidth
        placeholder="Search course, plant, crop, service"
        size="small"
        sx={{ bgcolor: "common.white", borderRadius: 1, height: "100%" }}
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

const data = [
  "Plant",
  "Fertilizer",
  "Shovel",
];

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%", // Full width of the container
          height: "auto", // Maintain aspect ratio
          maxHeight: "500px", // You can adjust this as needed
          objectFit: "cover", // Crop the image sides as the width decreases
          objectPosition: "center", // Keep the center of the image visible
          position: "relative",
        }}
        src={search}
      />

      <Box
        maxWidth="1180px"
        sx={{
          display: "flex",
          gap: "20px",
          position: "absolute",
          width: "100%",
          padding: "0 20px",
          boxSizing: "border-box",
          height: "40px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Searchbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
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
      {/* <div style={{ padding: 3 }}>
    {dataFiltered.map((d) => (
      <div
        className="text"
        style={{
          padding: 5,
          justifyContent: "normal",
          fontSize: 20,
          color: "blue",
          margin: 1,
          width: "250px",
          BorderColor: "green",
          borderWidth: "10px",
        }}
        key={d.id}
      >
        {d}
      </div>
    ))}
  </div> */}
    </Box>
  );
}
