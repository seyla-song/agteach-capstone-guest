import { Box, Stack, Typography, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router";

export default function CustomCard({ dataObj, variant, showDelete, onDelete }) {
  const cardVariant = () => {
    switch (variant) {
      case "product":
        return (
          <ProductCard
            dataObj={dataObj}
            showDelete={showDelete}
            onDelete={onDelete}
          />
        );
      default:
        return (
          <CourseCard
            dataObj={dataObj}
            showDelete={showDelete}
            onDelete={onDelete}
          />
        );
    }
  };
  return cardVariant();
}

const ProductCard = ({ dataObj, showDelete, onDelete }) => {
  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onDelete(dataObj.id);
  };

  const navigate = useNavigate();

  return (
    <Box pr onClick={() => navigate(`/marketplace/${dataObj.productId}`)}>
      <Box
        width="100%"
        component="img"
        src={dataObj.imageUrl}
        alt={dataObj.name}
      />
      <Stack p spacing={1} alignItems="flex-start">
        <Typography variant="bmdmd">{dataObj.name}</Typography>
        <Typography variant="bsr">${dataObj.price}</Typography>
        {showDelete && (
          <IconButton
            sx={{ color: "red.main" }}
            onClick={handleDeleteClick} // Handle icon button click
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

const CourseCard = ({ dataObj, showDelete, onDelete }) => {
  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onDelete(dataObj.id);
  };

  const navigate = useNavigate();

  return (
    <Box pr onClick={() => navigate(`/courses/${dataObj.productId}`)}>
      <Box
        width="100%"
        component="img"
        src={dataObj.thumbnailUrl}
        alt={dataObj.name}
      />
      <Box
        display={"flex"}
        justifyContent="space-between"
        p={1}
        alignContent={"center"}
      >
        <Stack>
          <Typography variant="bmdmd">{dataObj.name}</Typography>
          {dataObj.price ? (
            <Typography variant="bsr">${dataObj.price}</Typography>
          ) : (
            <Typography variant="bsr">{dataObj.instructor}</Typography>
          )}
        </Stack>
        <Box>
          {showDelete && (
            <IconButton
              sx={{ color: "red.main" }}
              size="small"
              onClick={handleDeleteClick}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};
