import { Outlet } from "react-router-dom";

function ProductRootLayout() {
    return (
        <>
            {/* <h1>Market place</h1> */}
            <Outlet />
        </>
    )
}

export default ProductRootLayout