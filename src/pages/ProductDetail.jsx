import { Link, useParams } from "react-router-dom"

function ProductDetailPage() {
    const params = useParams()
    return (
        <>
            <h1>Product detail page</h1>
            <p>{params.productId}</p>
            <Link to='/cart'>Cart</Link>
        </>
    )
}

export default ProductDetailPage