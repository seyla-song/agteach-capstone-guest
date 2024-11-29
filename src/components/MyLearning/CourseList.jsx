import { Button, Grid, Stack, Typography, Link } from "@mui/material";
import CustomCard from "../CustomCard";
import { Link as RouterLink } from "react-router-dom";
import { ItemsLoading } from "../ItemsLoading";
import { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useTranslation } from "react-i18next";

/**
 * CourseList component renders a list of courses that the user has
 * in their my learning section.
 *
 * @param {{ data: Array<Course> }} props
 *   - data is an array of Course objects that will be passed to CustomCard
 *     component. Each Course object should have the following properties:
 *     - id (number)
 *     - name (string)
 *     - image (string)
 *     - instructor (string)
 */

export const CourseList = ({ data, isLoading }) => {
  const [page, setPage] = useState(1);
  const limit = 15;
  const totalPages = Math.ceil(data.length / limit);

  const [paginatedData, setPaginatedData] = useState([]);

  const [t] = useTranslation("global");

  useEffect(() => {
    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + limit;
    setPaginatedData(data.slice(startIdx, endIdx));
  }, [page, data]);
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0); // Prevent going below page 1
  };

  return (
    <Stack gap={3}>
      <Stack gap>
        <Typography variant="h3">{t("myLearning.pageTitle")}</Typography>
        {isLoading && <ItemsLoading title={t("contentLoading.course")} />}
        {data.length > 0 && (
          <Typography variant="bsr">
            {t("myLearning.myCourses", { count: data.length })}
          </Typography>
        )}
        {data.length === 0 && !isLoading && (
          <Typography variant="bsr">{t("myLearning.noCourse")}</Typography>
        )}
      </Stack>

      {paginatedData && (
        <Grid container spacing>
          {paginatedData?.map((item, idx) => (
            <Grid item key={idx} xs={4} md={2.4}>
              <Link
                component={RouterLink}
                to={`/courses/${item.course_id}/watch/overview`}
                underline="none"
              >
                <CustomCard dataObj={item} />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}

      {data?.length !== 0 && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
          py={3}
        >
          <Button
            variant="outlined"
            onClick={handlePrevious} // Prevent going below page 1
            disabled={page === 1} // Disable if on the first page
          >
            <NavigateBeforeIcon />
          </Button>
          <Typography>{t("myLearning.pagination", { page, totalPages })}</Typography>
          <Button
            variant="outlined"
            onClick={handleNext}
            disabled={page === totalPages} // Disable if on the last page
          >
            <NavigateNextIcon />
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
