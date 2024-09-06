import { Container, Typography } from "@mui/material";
import CourseList from "../components/MyLearning/CourseList";

export default function MyLearning() {
    return (
        <Container maxWidth={false}
            sx={{
                maxWidth: '1420px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                py: 10,
                gap: 5, }}>
        <CourseList data={courses} />
        </Container>
    )
}

const courses = [
  {
    id: 1,
    name: 'Indoor Plant Propagation Techniques',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Vertical Gardening for Urban Spaces',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Organic Indoor Plant Care and Maintenance',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Advanced Indoor Plant Lighting Strategies',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 5',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Product 6',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Product 7',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Product 8',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
];