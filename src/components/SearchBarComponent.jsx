import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const data = ["Plant", "Fertilizer", "Shovel"];

export default function SearchBar({ backDrop, slogan }) {
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
          <Autocomplete
            id="search-bar"
            sx={{ width: "100%", height: "40px", mx: "auto" }}
            options={data}
            autoHighlight
            getOptionLabel={(option) => option}
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
              component={RouterLink}
              to="search"
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
