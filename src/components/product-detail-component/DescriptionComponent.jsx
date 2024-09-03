// import { Box, Chip, Typography } from "@mui/material";

// const data = `Our Heavy-Duty Garden Shovel is a must-have tool for every gardener and
//         farmer. Designed for durability and efficiency, this shovel makes
//         digging, planting, and landscaping tasks easier and more comfortable.
//         Features:`;
// export default function DescriptionComponent() {
//   return (
//     <Box height="100px">
//       <Chip label={data} maxLength={2} />
//     </Box>
//   );
// }

import { Box, Typography, Modal, Stack, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function DescriptionComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const description = `Our Heavy-Duty Garden Shovel is a must-have tool for every gardener and farmer. Designed for durability and efficiency, this shovel makes digging, planting, and landscaping tasks easier and more comfortable.
Features:
Material: Made from high-quality, rust-resistant steel, ensuring longevity and durability.
Handle: Ergonomic wooden handle with a comfortable grip, reducing hand and wrist fatigue.
Benefits:
Versatile Use: Ideal for a variety of gardening tasks, including digging holes, planting trees and shrubs, moving soil, and more.
Durable Construction: Built to withstand heavy use in all weather conditions, ensuring a long service life.
  `;

  return (
    <Box>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 5,
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        {description}
      </Typography>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 800,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
            outline: "none",
            typography: {xs: 'bsr', md: 'bmdr'} 
          }}
        >
          <Box display="flex" justifyContent="end">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" component="h2">
            Description
          </Typography>
          <Typography sx={{ mt: 2}}>{description}</Typography>
        </Box>
      </Modal>
    </Box>
  );
}
