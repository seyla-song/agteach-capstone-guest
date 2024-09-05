import { Link } from "react-router-dom"

function WishlistPage() {
    return (
        <>
            <h1>Wishlist page</h1>
            <Link to='/courses/:coursesId/watch/:videoId'>Course video page</Link>
            <br />
            <Link to='/marketplace/:productId'>Product detail page</Link>
        </>
    )
}

export default WishlistPage