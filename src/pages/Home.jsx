import { useGetProductCarouselQuery } from '../services/api/productApi';
import { useGetCourseCarouselQuery } from '../services/api/courseApi';

import { Container } from '@mui/material';

import {
  MemberComponent,
  SearchBar,
  CarouselComponent,
  CoreValueComponent,
  CustomFaq,
  CustomSectionTitle,
} from '../components/index';

import search from '../assets/happy-farm-community.jpeg';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { data: productsData } = useGetProductCarouselQuery();
  const { data: coursesData } = useGetCourseCarouselQuery();

  // Assuming the data structure includes images for courses and products
  const courses = coursesData?.data || []; // Adjust based on actual structure
  const products = productsData?.data || []; // Adjust based on actual structure

  const [t] = useTranslation('global');

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1420px',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '50px', md: '120px' },
        padding: 0,
        margin: {
          xs: 'auto auto 50px auto',
          md: '100px auto 100px auto',
        },
      }}
    >
      <SearchBar backDrop={search} />

      {courses.length > 0 && (
        <CarouselComponent data={courses} cardVariant="course">
          <CustomSectionTitle
            title={t('homepage.carouselCourseTitle')}
            path="/search?name="
          />
        </CarouselComponent>
      )}

      <CoreValueComponent />

      {products.length > 0 && (
        <CarouselComponent data={products} cardVariant="product">
          <CustomSectionTitle
            title={t('homepage.carouselProductTitle')}
            path="/marketplace"
          />
        </CarouselComponent>
      )}

      <MemberComponent />

      <CustomFaq />
    </Container>
  );
}

export default HomePage;
