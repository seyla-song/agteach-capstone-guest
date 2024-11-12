import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { Button, Stack, Typography, Box } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import UploadIcon from '@mui/icons-material/FileUploadOutlined';
import ScanIcon from '@mui/icons-material/CenterFocusStrongOutlined';

import { usePredictImageMutation } from '../../services/api/aiApi';
import { convertToJPG } from '../../utils/imageUtils';

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
  const [predictImage, { isLoading, isError }] = usePredictImageMutation();

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
    setScan(true);

    const file = data.file[0];
    const resizeFile = await convertToJPG(file);
    const formData = new FormData();
    formData.append('image', resizeFile);

    try {
      const res = await predictImage(formData).unwrap();

      if (isError) {
        throw new Error('Network response was not ok');
      }

      if (!isLoading) {
        setScan(false);
      }
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Check if there's a selected file and if its type is valid
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  const selectedFileOption = selectedFile && selectedFile[0];
  const isValidFile =
    selectedFileOption && validTypes.includes(selectedFileOption.type);

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
              <Typography variant="bxsr" color="dark.300">
                Upload your image here .jpg 150 x 150
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
            accept="image/jpeg, image/png, image/webp"
            {...register('file')}
          />
          {!data && (
            <Stack gap={1} direction="row" py={3}>
              <Button
                onClick={() => document.getElementById('file').click()}
                disabled-={!selectedFile || !isValidFile}
                variant="outlined"
                color="primary"
                endIcon={<UploadIcon />}
              >
                Upload
              </Button>
              {selectedImageUrl &&  (
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!isValidFile}
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
          {!isValidFile && selectedFile && (
            <Typography variant="bxsr" color="red.main">
              Please select a valid image file (JPG, PNG, or WEBP).
            </Typography>
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
        </Stack>
      )}
      {data && <DiseaseInfoComponent data={data} />}
    </Stack>
  );
};
