import { Link } from "react-router-dom";

function CourseDetailPage() {
  return (
    <>
      <h1>Course detail page</h1>
      <Link to='/courses/:coursesId/watch/:videoId'>Course 1 video</Link>
      <br />
      <Link to='/cart'>Cart</Link>
    </>
  );
}

export default CourseDetailPage;
