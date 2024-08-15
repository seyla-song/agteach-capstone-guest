import { Link } from "react-router-dom"

function MyLearningPage() {
    return (
        <>
            <h1>My learning page</h1>
            <Link to='/courses/:coursesId/watch/:videoId'>Course video page</Link>
        </>
    )
}

export default MyLearningPage