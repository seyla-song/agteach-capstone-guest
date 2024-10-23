import { Outlet } from "react-router-dom";

function AuthRootLayout() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default AuthRootLayout