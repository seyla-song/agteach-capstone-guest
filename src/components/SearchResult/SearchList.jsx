import { Box, Button, Grid2 as Grid, Stack } from "@mui/material";
import CustomCard from "../CustomCard";
import { DataObject } from "@mui/icons-material";

function SearchList({ dataObj, cardVariant, limit, handleLimitChange }) {

  return (
    <>
      <Grid container size={{ xs: 12 }} width={"100%"}>
      {dataObj.slice(0, limit).map((product, idx) => (
          <Grid key={idx} size={{ xs: 4 }}>
            <CustomCard dataObj={product} variant={cardVariant} />
          </Grid>
        ))}
      </Grid>
      {dataObj.length >= limit && <Button variant="outlined" fullWidth onClick={handleLimitChange}>View More</Button>}
    </>
  );
}
export default SearchList;
