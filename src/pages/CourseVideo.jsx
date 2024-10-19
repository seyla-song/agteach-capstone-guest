import { Stack, Grid, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import {
  CourseVideoHeaderComponent,
  CourseVideoMainContent,
  CourseVideoSidebar,
} from "../components/CourseVideo/index";
import Footer from "../components/Footer";
import { useGetEnrollmentCourseQuery, useGetOneCourseQuery } from "../services/api/courseApi";
import { useNavigate, useParams } from "react-router-dom";

/**
 * The course video page.
 *
 * This page will display the course video, together with the sidebar containing
 * the course details and the course outline.
 *
 * @returns {React.ReactElement} The course video page.
 */
function CourseVideoPage() {
  const { coursesId, videoId } = useParams();

  const { data: courses, isLoading: isCoursesLoading, isError, error } =
    useGetEnrollmentCourseQuery(coursesId);

  const navigate = useNavigate();
  if(isError){
    console.log(error)
    return navigate(`/courses/${coursesId}`);
  }
  if (isCoursesLoading) {
    return (
      <>
        <Typography>Loading...</Typography>
      </>
    );
  }
  const contentList = !isCoursesLoading ? courses.data.sections : [];
  const courseData = !isCoursesLoading ? courses.data : [];
  const productSuggestions = !isCoursesLoading
    ? courses.data.product_suggestions
    : [];

    console.log('productSuggestions',productSuggestions)
  // Function to get video URL by lectureId
  function getVideoNameUrlByLectureId(sections, lectureId) {
    for (const section of sections) {
      const lecture = section.lectures.find(
        (lecture) => String(lecture.lectureId) === String(lectureId)
      );
      if (lecture) {
        return { name: lecture.name, url: lecture.videoUrl };
      }
    }
    return null; // Return null if no matching lecture is found
  }
  let lectureId;
  if (videoId === "overview") {
    lectureId = contentList[0].lectures[0].lectureId;
  } else {
    lectureId = videoId;
  }

  const videoNameUrl = getVideoNameUrlByLectureId(contentList, lectureId);
  if (videoNameUrl === null) {
    return navigate("/error");
  }


  return (
    <Stack>
      {/* The course video header */}
      <CourseVideoHeaderComponent title={"Course Video"} />
      {/* The course video main content and sidebar */}
      <Grid container>
        {/* The main content containing the video */}
        <Grid item xs={10}>
          <CourseVideoMainContent
            courseData={courseData}
            videoNameUrl={videoNameUrl}
            highlights={highlights}
            courses={courses}
            products={products}
            productSuggestions={productSuggestions}
          />
          <Footer />
        </Grid>
        {/* The sidebar containing the course details and outline */}
        <Grid item xs={2}>
          <CourseVideoSidebar data={contentList} />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CourseVideoPage;

const highlights = [
  {
    title: "Sections",
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
  {
    title: "Hours",
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
  {
    title: "Vidoes",
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
];


const products = [
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$10",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$15",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$20",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$25",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Grow Lights - LED or fluorescent grow lights",
    price: "$30",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 6",
    price: "$35",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 7",
    price: "$40",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 8",
    price: "$45",
    image: "https://via.placeholder.com/150",
  },
];
