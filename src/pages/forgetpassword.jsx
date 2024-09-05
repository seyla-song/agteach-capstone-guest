import { Link } from "react-router-dom";

export default function ForgetPasswordPage() {
  return (
    <>
      <h1>Forget password</h1>
      <Link to='/reset-password'>reset password</Link>
    </>
  );
}
