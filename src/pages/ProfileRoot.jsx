import { Link, Outlet } from "react-router-dom";

function ProfileRootLayout() {
  return (
    <>
    <Link to='/profile/guest'>Instructor profile</Link>
    <Link to='/profile/instructor'>Guest profile</Link>
      <Outlet />
    </>
  );
}

export default ProfileRootLayout