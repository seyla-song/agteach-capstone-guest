import { Box, Button, Stack, Typography } from "@mui/material";
import member from "../assets/Home/member.png";
import { Link as RouterLink } from "react-router-dom";

export default function MemberComponent() {
  return (
    <Box
      maxWidth="1420px"
      bgcolor="primary.main"
      sx={{
        display: "flex",
        gap: { xs: "20px", sm: "40px", md: "80px" },
        padding: { xs: "30px 10px", sm: "50px", md: "100px" },
      }}
    >
      <Stack
        spacing="20px"
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ typography: { xs: "blgsm", sm: "h4", md: "h2" } }}
          color="common.white"
        >
          Ready to share your passion for indoor gardening?
        </Typography>
        <Typography
          sx={{ typography: { xs: "bxsr", sm: "bsr" } }}
          color="common.white"
        >
          Join our platform as an instructor and inspire others while showcasing
          your expertise. Empower the next generation of gardeners and grow your
          impact today! Apply now and be a part of our vibrant community
        </Typography>
        <Box>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="secondary"
            sx={{
              color: "primary.main",
              typography: { xs: "bxsr", sm: "bsr" },
            }}
          >
            Become a member
          </Button>
        </Box>
      </Stack>
      <Box
        component="img"
        src={member}
        sx={{
          width: "50%",
          height: "auto",
          objectFit: "contain", // Ensures the image scales nicely within its container
        }}
      />
    </Box>
  );
}
