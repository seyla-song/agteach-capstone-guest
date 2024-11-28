import { Stack, Typography } from '@mui/material';
import { CustomCarousel } from './CustomCarousel';
import { useTranslation } from 'react-i18next';

/**
 * A component that renders a carousel of suggested courses and related products.
 *
 * It receives an array of courses and an array of products as props and renders
 * two carousels, one for the courses and one for the products. The courses carousel
 * shows the title and image of each course, while the products carousel shows the
 * title, image and price of each product.
 *
 * The component is used in the course detail page to suggest related courses and
 * products to the user.
 *
 * @param {{ courses: Course[], products: Product[] }} props
 *   - courses: An array of courses to be rendered in the first carousel.
 *   - products: An array of products to be rendered in the second carousel.
 *
 * @returns {React.ReactElement} The suggested courses and products component.
 */
export const SuggestedCourseProduct = ({ courses, products }) => {
  const [t] = useTranslation("global");
  const recommendedProducts = products.map((prod) => prod.product);
  
  return (
    <Stack gap={5} pt={{xs:10, md:10}} width="100%">    
      {courses.length > 0 && 
        <Stack gap={2}>
          <Typography variant="h4" maxWidth={300}>
            {t('courseDetail.peopleAlsoLearnThisCourse')}
          </Typography>
          <CustomCarousel data={courses} slideToShow={5} />
        </Stack>
      }
      {products.length > 0 &&
        <Stack gap={2}>
          <Typography variant="h4" maxWidth={300}>
          {t('courseDetail.youMightWantToBuyTheProductRelatedToThisCourse')}
          </Typography>
          <CustomCarousel data={recommendedProducts} cardVariant="product" slideToShow={5} />
        </Stack>
      }
    </Stack>
  );
};
