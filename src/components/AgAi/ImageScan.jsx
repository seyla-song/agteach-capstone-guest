import { Button, Stack, Typography, Box } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import UploadIcon from '@mui/icons-material/FileUploadOutlined';
import ScanIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { DiseaseInfoComponent } from './DiseaseInfoComponent';

/**
 * ImageScan component is a reusable component
 * that renders a image upload form and a canvas
 * to display the uploaded image.
 *
 * @returns {JSX.Element} A JSX element that renders a form
 * with an input field and a button to upload an image
 * and a canvas to display the uploaded image.
 *
 * @example
 * <ImageScan />
 */
export const ImageScan = () => {
  const { handleSubmit, watch, register, reset } = useForm();
  const [isScan, setScan] = useState(false);
  const [data, setData] = useState();

  const selectedFile = watch('file');

  /**
   * The URL of the selected image.
   *
   * @type {string | null}
   */
  const selectedImageUrl =
    selectedFile && selectedFile.length > 0
      ? URL.createObjectURL(selectedFile[0])
      : null;

  /**
   * Handles the form submission by simulating a delay for fetching data.
   *
   * When the form is submitted, it sets the `isScan` state to `true` and then
   * waits for 2 seconds before setting it back to `false` and updating the
   * `data` state with the mock data `plantDiseaseInfo`.
   *
   * The returned function is a cleanup function that clears the timer when the
   * component is unmounted.
   *
   * @param {Object} data The form data.
   * @returns {Function} A cleanup function.
   */
  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append('image', data.file[0]);

    try {
      const response = await fetch('http://ai.agteach.site/', {
        method: 'POST',
        body: formdata, // Directly send the file if the backend supports it
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json(); // Parse the JSON response
      console.log(responseData);
    } catch (err) {
      console.error(err);
    }

    setScan(true);
    // Simulate a delay for fetching data
    const timer = setTimeout(() => {
      setScan(false);
      setData(plantDiseaseInfo);
    }, 5000); // 2-second delay

    // Cleanup the timer
    return () => clearTimeout(timer);
  };

  const handleReset = () => {
    reset();
    setScan(false);
    setData(undefined);
  };

  return (
    <Stack
      borderRadius={3}
      bgcolor="grey.100"
      width="100%"
      gap={2}
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)} width="100%">
        <Stack alignItems="center">
          {!selectedImageUrl && (
            <Stack alignItems="center">
              <ImageIcon sx={{ width: 200, height: 200 }} />
              <Typography variant="bsr" color="initial">
                Drag an image here or upload a file
              </Typography>
            </Stack>
          )}
          {selectedImageUrl && (
            <Box
              width="100%"
              bgcolor="black"
              height={350}
              sx={{ position: 'relative' }}
            >
              <Box
                component="img"
                src={selectedImageUrl}
                height={350}
                width="100%"
                sx={{
                  position: 'absolute',
                  objectFit: 'contain',
                  zIndex: 1, // Lower z-index
                }}
              />
              {isScan && (
                <Box
                  component="iframe"
                  src="https://lottie.host/embed/ae3c00f9-55c0-45bc-8c88-55250fb91f1e/DyYJn5LXih.json"
                  height={350}
                  bgcolor="black"
                  sx={{
                    border: 'none',
                    opacity: 0.5,
                    width: '100%',
                    position: 'absolute',
                    zIndex: 2, // Higher z-index
                  }}
                />
              )}
            </Box>
          )}
          <Box
            display="none"
            component="input"
            id="file"
            type="file"
            {...register('file')}
          />
          {!data && (
            <Stack gap direction="row" py={3}>
              <Button
                onClick={() => document.getElementById('file').click()}
                disabled-={!selectedFile}
                variant="outlined"
                color="primary"
                endIcon={<UploadIcon />}
              >
                Upload
              </Button>
              {selectedImageUrl && (
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<ScanIcon />}
                >
                  Scan
                </Button>
              )}
            </Stack>
          )}
          {data && (
            <Stack py={3}>
              <Button
                variant="contained"
                onClick={handleReset}
                endIcon={<ScanIcon />}
              >
                Scan another plant
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
      {isScan && (
        <Stack
          width="100%"
          alignItems="center"
          justifyContent="start"
          direction="row"
        >
          <Typography variant="bxsr">@Analyzing</Typography>
          <Box
            width={100}
            border="none"
            component="iframe"
            src="https://lottie.host/embed/d0c33b28-8b32-4889-b1af-d4966e850a65/j92NFQCzgA.json"
          />
        </Stack>
      )}
      {data && <DiseaseInfoComponent data={plantDiseaseInfo} />}
    </Stack>
  );
};

const plantDiseaseInfo = {
  plant: 'Brandywine Tomato',
  problem: {
    title: 'Problem',
    details: ['Late Blight (Phytophthora infestans)'],
  },
  symptoms: {
    title: 'Symptoms',
    details: [
      'Irregular, water-soaked spots on leaves and stems that turn brown and necrotic.',
      'Fruits may develop dark, sunken lesions.',
    ],
  },
  cureManagement: {
    title: 'Cure/Management',
    details: [
      'Resistant Varieties: Use late blight-resistant varieties if available.',
      'Fungicides: Apply metalaxyl or mefenoxam-based fungicides as a preventative measure.',
      'Cultural Control: Remove and destroy infected plants and maintain good air circulation. Avoid overhead watering.',
    ],
  },
};
