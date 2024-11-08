import { useNavigate } from 'react-router';

import { Box, Stack, Typography, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { dateFormat } from '../utils/dateFormat';
import { useGetEnrollmentCourseQuery } from '../services/api/courseApi';
import { useEffect, useState } from 'react';

export default function CustomCard({ dataObj, variant, showDelete, onDelete }) {
  const cardVariant = () => {
    switch (variant) {
      case 'product':
        return (
          <ProductCard
            dataObj={dataObj}
            showDelete={showDelete}
            onDelete={onDelete}
          />
        );
      default:
        return (
          <CourseCard
            dataObj={dataObj}
            showDelete={showDelete}
            onDelete={onDelete}
          />
        );
    }
  };
  return cardVariant();
}

const ProductCard = ({ dataObj, showDelete, onDelete }) => {
  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onDelete(dataObj.id);
  };

  const navigate = useNavigate();

  return (
    <Box
      mr={1}
      sx={{ cursor: 'pointer' }}
      onClick={() => navigate(`/marketplace/${dataObj.productId}`)}
    >
      <Box
        width="100%"
        component="img"
        src={dataObj.imageUrl}
        alt={dataObj.name}
      />
      <Stack p={1} spacing={1} alignItems="flex-start">
        <Typography variant="bmdmd">{dataObj.name}</Typography>
        <Typography variant="bsr">${dataObj.price}</Typography>
        {showDelete && (
          <IconButton
            sx={{ color: 'red.main' }}
            onClick={handleDeleteClick} // Handle icon button click
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

const CourseCard = ({ dataObj, showDelete, onDelete }) => {
  const [courseId, setCourseId] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null); // To track redirection
  const { data, isLoading, refetch, isFetching, isError } =
    useGetEnrollmentCourseQuery(courseId, { skip: !triggerFetch });
  const navigate = useNavigate();

  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onDelete(dataObj.id);
  };
  // const handleNavigate = async (id) => {
  //   console.log('id', id)
  //   setCourseId(id);
  //   const result = await refetch(id);
  //   console.log(result)
  //   if (result.data && result.data.length > 0) {
  //     navigate(`/courses/${courseId}/watch/overview`)
  //   } else {
  //     navigate(`/courses/${id}`);
  //   }
  // };
  // const handleNavigate = (id) => {
  //   setCourseId(id); // Set courseId for the query
  //   setTriggerFetch(true); // Enable query

  //   if (!isLoading && data && data.length > 0) {
  //     navigate(`/courses/${id}/watch/overview`);
  //   } else {
  //     navigate(`/courses/${id}`);
  //   }
  // };
  // useEffect(() => {
  //   if (!isLoading && data && !isFetching) {
  //     console.log(data);
  //     if (data.data) {
  //       console.log('new page');
  //       navigate(`/courses/${courseId}/watch/overview`);
  //     } else {
  //       console.log('new page');
  //     }
  //   }
  // }, [data, isLoading, navigate, courseId, isFetching, isError]);

  // const handleNavigate = (id) => {
  //   setCourseId(id); // Set the courseId for the query
  //   setTriggerFetch(true); // Enable query to start fetching
  //   refetch();
  //   if (isError) {
  //     navigate(`/courses/${id}`);
  //   }
  // };

  // Wait for the data to be fetched before navigating
  useEffect(() => {
    if (!isLoading && triggerFetch) {
      if (data?.data) {
        setRedirectTo(`/courses/${courseId}/watch/overview`);
      } else {
        setRedirectTo(`/courses/${courseId}`);
      }
    }
  }, [data, isLoading, courseId, triggerFetch]);
  // // Wait for the data to be fetched or if there is an error
  //   useEffect(() => {
  //     if (!isLoading) {
  //       if (isError) {
  //         // Navigate to a specific error page if there is an error
  //         setRedirectTo('/error-page'); // Set the redirection for error
  //       } else if (data) {
  //         // Navigate to the appropriate page if data is fetched
  //         if (data.length > 0) {
  //           setRedirectTo(`/courses/${courseId}/watch/overview`);
  //         } else {
  //           setRedirectTo(`/courses/${courseId}`);
  //         }
  //       }
  //     }
  //   }, [data, isLoading, isError, courseId]);
  // Redirect if redirection is set
  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo); // Perform the actual navigation
    }
  }, [redirectTo, navigate]);

  const handleNavigate = (id) => {
    setCourseId(id); // Set courseId to trigger the query
    setTriggerFetch(true); // Trigger fetch
  };

  return (
    <Box
      mr={1}
      sx={{ cursor: 'pointer' }}
      onClick={() => {
        handleNavigate(dataObj.courseId);
      }}
    >
      <Box
        width="100%"
        component="img"
        src={dataObj.thumbnail_url || dataObj.thumbnailUrl}
        alt={dataObj.name}
      />
      <Box
        display={'flex'}
        justifyContent="space-between"
        p={1}
        alignContent={'center'}
      >
        <Stack>
          <Typography variant="bmdmd">{dataObj.name}</Typography>
          {dataObj.created_at && (
            <Typography variant="bsr">
              {dateFormat(dataObj.created_at || '')}
            </Typography>
          )}
          {dataObj.price ? (
            <Typography variant="bsr">${dataObj.price}</Typography>
          ) : (
            <Typography variant="bsr">
              {dataObj.first_name} {dataObj.last_name}
            </Typography>
          )}
        </Stack>
        <Box>
          {showDelete && (
            <IconButton
              sx={{ color: 'red.main' }}
              size="small"
              onClick={handleDeleteClick}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};
