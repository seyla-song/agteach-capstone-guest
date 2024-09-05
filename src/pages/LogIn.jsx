import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <>
            <h1>Login page</h1>
            <Link to='/forget-password'>forget password</Link>
        </>
    )
}

export default LoginPage