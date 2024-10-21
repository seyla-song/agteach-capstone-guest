import { Stack, Grid } from '@mui/material';
import {
  CourseVideoHeaderComponent,
  CourseVideoMainContent,
  CourseVideoSidebar,
} from '../components/CourseVideo/index';
import { Footer } from '../components/index';
import {
  useGetEnrollmentCourseQuery,
  useGetRecommendedCoursesQuery,
} from '../services/api/courseApi';
import { useNavigate, useParams } from 'react-router-dom';
import { ContentLoading } from '../components/ContentLoading';

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

  const {
    data: courses,
    isLoading: isCoursesLoading,
    isError,
  } = useGetEnrollmentCourseQuery(coursesId);
  const { data: recommendedCoursesData, isLoading: isRecommendedLoading } =
    useGetRecommendedCoursesQuery(coursesId);
  const navigate = useNavigate();
  if (isError) {
    return navigate(`/courses/${coursesId}`);
  }
  if (isCoursesLoading) {
    return <ContentLoading />;
  }
  const contentList = !isCoursesLoading ? courses.data.sections : [];
  const courseData = !isCoursesLoading ? courses.data : [];
  const productSuggestions = !isCoursesLoading
    ? courses.data.product_suggestions
    : [];
  const recommendedCourses = !isRecommendedLoading
    ? recommendedCoursesData.data
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
  if (videoId === 'overview') {
    lectureId = contentList[0].lectures[0].lectureId;
  } else {
    lectureId = videoId;
  }

  const videoNameUrl = getVideoNameUrlByLectureId(contentList, lectureId);
  if (videoNameUrl === null) {
    return navigate(`courses/${coursesId}/watch/overview`);
  }

  return (
    <Stack>
      {/* The course video header */}
      <CourseVideoHeaderComponent title={courseData.name} />
      {/* The course video main content and sidebar */}
      <Grid container>
        {/* The main content containing the video */}
        <Grid item xs={12} md={10}>
          <CourseVideoMainContent
            courseData={courseData}
            videoNameUrl={videoNameUrl}
            courses={recommendedCourses}
            products={productSuggestions}
            // productSuggestions={productSuggestions}
          >
            <CourseVideoSidebar data={contentList} />
          </CourseVideoMainContent>
          <Footer />
        </Grid>
        {/* The sidebar containing the course details and outline */}
        <Grid item xs={2} display={{ xs: 'none', md: 'block' }}>
          <CourseVideoSidebar data={contentList} />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CourseVideoPage;
