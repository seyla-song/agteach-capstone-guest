import { Container, Typography } from "@mui/material"
import HeroComponent from "../components/home-components/HeroComponent"
import MemberComponent from "../components/home-components/MemberComponent"
import SearchBarComponent from "../components/SearchBarComponent"

function HomePage() {
    return (
        <Container maxWidth={false} sx={{maxWidth: '1420px', display: 'flex', flexDirection: 'column', gap: 10, padding: 0}}>
            <SearchBarComponent />
            <HeroComponent />
            <MemberComponent />
        </Container>
    )
}

export default HomePage;
