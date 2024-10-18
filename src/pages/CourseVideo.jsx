import { Stack, Grid, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import {
  CourseVideoHeaderComponent,
  CourseVideoMainContent,
  CourseVideoSidebar,
} from "../components/CourseVideo/index";
import Footer from "../components/Footer";
import { useGetOneCourseQuery } from "../services/api/courseApi";
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

  const { data: courses, isLoading: isCoursesLoading } =
    useGetOneCourseQuery(coursesId);
  isCoursesLoading ? console.log("loading") : console.log(courses);
  console.log(videoId);
  console.log(coursesId);
  const navigate = useNavigate();
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
  console.log(videoId);
  console.log(videoNameUrl);

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

// const coursesContent = [
//   {
//     title: "Introduction to Indoor Gardening",
//     duration: "35min",
//     topics: [
//       { title: "Overview of indoor gardening", duration: "10min" },
//       { title: "Benefits and Challenges", duration: "15min" },
//       { title: "Course Objectives and Structure", duration: "10min" },
//     ],
//   },
//   {
//     title: "Setting Up Your Hydroponic System",
//     duration: "35min",
//     topics: [
//       { title: "Overview of hydroponic systems", duration: "10min" },
//       { title: "Setting Up Equipment", duration: "15min" },
//       { title: "System Maintenance", duration: "10min" },
//     ],
//   },
//   {
//     title: "Understanding Nutrients",
//     duration: "35min",
//     topics: [
//       { title: "Essential Nutrients", duration: "15min" },
//       { title: "Nutrient Solutions", duration: "10min" },
//       { title: "Common Deficiencies", duration: "10min" },
//     ],
//   },
//   {
//     title: "Plant Selection and Preparation",
//     duration: "35min",
//     topics: [
//       { title: "Choosing the Right Plants", duration: "15min" },
//       { title: "Preparing Seeds and Seedlings", duration: "10min" },
//       { title: "Soil and Growing Mediums", duration: "10min" },
//     ],
//   },
//   {
//     title: "Lighting for Indoor Plants",
//     duration: "35min",
//     topics: [
//       { title: "Types of Grow Lights", duration: "15min" },
//       { title: "Light Duration and Intensity", duration: "10min" },
//       { title: "Positioning Lights", duration: "10min" },
//     ],
//   },
//   {
//     title: "Temperature and Humidity Control",
//     duration: "35min",
//     topics: [
//       { title: "Optimal Temperature Ranges", duration: "10min" },
//       { title: "Humidity Requirements", duration: "10min" },
//       { title: "Monitoring and Adjusting Conditions", duration: "15min" },
//     ],
//   },
//   {
//     title: "Water Management",
//     duration: "35min",
//     topics: [
//       { title: "Watering Techniques", duration: "15min" },
//       { title: "Water Quality and pH Levels", duration: "10min" },
//       { title: "Irrigation Systems", duration: "10min" },
//     ],
//   },
//   {
//     title: "Pest and Disease Management Part I",
//     duration: "35min",
//     topics: [
//       { title: "Identifying Common Pests", duration: "10min" },
//       { title: "Preventive Measures", duration: "15min" },
//       { title: "Treatment Options", duration: "10min" },
//     ],
//   },
//   {
//     title: "Pest and Disease Management Part II",
//     duration: "35min",
//     topics: [
//       { title: "Identifying Common Diseases", duration: "10min" },
//       { title: "Disease Prevention Strategies", duration: "15min" },
//       { title: "Advanced Treatment Methods", duration: "10min" },
//     ],
//   },
// ];

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

const courses = [
  {
    name: "Indoor Plant Propagation Techniques",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Vertical Gardening for Urban Spaces",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Organic Indoor Plant Care and Maintenance",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Advanced Indoor Plant Lighting Strategies",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 5",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 6",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 7",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 8",
    instructor: "Emily Greene",
    image: "https://via.placeholder.com/150",
  },
];
