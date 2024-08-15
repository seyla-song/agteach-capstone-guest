import { Link } from "react-router-dom"

function SearchResultPage() {
    return (
        <>
            <h1>Search result page</h1>
            <Link to='/marketplace/:productId'>Product 1 detail</Link>
        </>
    )
}

export default SearchResultPage