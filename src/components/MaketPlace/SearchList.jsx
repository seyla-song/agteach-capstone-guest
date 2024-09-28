import { Box, Button, Grid2 as Grid, Stack } from "@mui/material";
import CustomCard from "../CustomCard";

function SearchList({ dataObj, cardVariant, limit, handleLimitChange }) {
  return (
    <>
      <Box width="100%" p={2}>
        <Grid container size={{ xs: 12 }} width={"100%"}>
          {dataObj.map((product, idx) => (
            <Grid size={{ xs: 4 }}>
              <CustomCard key={idx} dataObj={product} variant={cardVariant} />
            </Grid>
          ))}
        </Grid>
        {dataObj.lenght > limit && <Button variant="outlined" paddingX={2} fullWidth onClick={handleLimitChange}>View More</Button>}
      </Box>
    </>
  );
}
export default SearchList;
