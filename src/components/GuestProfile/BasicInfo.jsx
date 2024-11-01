import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  OutlinedInput,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  Stack,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useUpdateInfoMutation } from '../../services/api/userApi'; // Import the isLogin query
import { CustomAlert } from '../CustomAlert';

export const BasicInfo = ({ userData, cities }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue, // Allows you to set form values
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      city: '',
      address: '',
    },
  });
  const [updateInfo, { isLoading: isLoadingInfo, isError, error, isSuccess }] =
    useUpdateInfoMutation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (userData && userData.customer) {
      const customerData = userData?.customer;
      const { firstName, lastName, phone, location, address } = customerData;
      setValue('firstName', firstName || '');
      setValue('lastName', lastName || '');
      setValue('phone', phone || '');
      setValue('city', location?.name || '');
      setValue('address', address || '');
    }
  }, [userData, setValue, cities]);

  const onSubmit = async (formData) => {
    const { city: selectedCity } = formData;

    cities?.forEach((city) => {
      if (city?.name === selectedCity) {
        formData.locationId = city?.locationId;
      }
    });

    await updateInfo(formData);
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]+$/; // Only digits
    if (!value) return true; // Allow empty input if not required
    if (value?.length > 15) return 'Phone number cannot exceed 15 digits';
    if (value?.length < 8) return 'A Valid phone number should contains atleast 8 digits';
    if (String(value[0]) !== '0') return 'Phone number shoud start with 0. e.g. 0123456789';
    return phonePattern.test(value) || 'Please enter a valid phone number';
  };

  return (
    <>
      <Stack sx={{ m: 2, gap: 2 }}>
        <Typography variant="h4">Basic Information</Typography>
        <CustomAlert
          label={
            isError
              ? error?.data?.message
              : isSuccess
              ? 'Successfuly updated Information'
              : 'Something went wrong. Please try again'
          }
          severity={isError ? 'error' : 'success'}
          open={open}
          onClose={() => setOpen(false)}
        />
        <FormControl variant="outlined" error={!!errors?.firstName}>
          <InputLabel htmlFor="first-name">First Name</InputLabel>
          <OutlinedInput
            id="first-name"
            label="First Name"
            placeholder="e.g. Jane"
            {...register('firstName', {
              required: 'First name is required',
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'First name can only contain letters',
              },
            })}
          />
          {errors.firstName && (
            <FormHelperText>{errors?.firstName?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="outlined" error={!!errors?.lastName}>
          <InputLabel htmlFor="last-name">Last Name</InputLabel>
          <OutlinedInput
            id="last-name"
            label="Last Name"
            placeholder="e.g. Smith"
            {...register('lastName', {
              required: 'Last name is required',
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Last name can only contain letters',
              },
            })}
          />
          {errors.lastName && (
            <FormHelperText>{errors?.lastName?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth error={!!errors?.city}>
        <InputLabel htmlFor="city">City</InputLabel>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            rules={{
              validate: (value) =>
                value
                  ? cities.some((city) => city.name === value) ||
                    'Please provide a valid city'
                  : 'Please select a city',
            }}
            render={({ field }) => (
              <Select {...field} label="City">
                {cities.map((city) => (
                  <MenuItem key={city.name} value={city.name}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <FormHelperText>{errors?.city?.message}</FormHelperText>
        </FormControl>

        <FormControl variant="outlined" error={!!errors?.address}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <OutlinedInput
            id="address"
            label="Address"
            placeholder="N. 61Eo, Street 166"
            {...register('address', {
              required: 'Address is required',
            })}
          />
          {errors?.address && (
            <FormHelperText>{errors?.address?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl variant="outlined" error={!!errors?.phone}>
          <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
          <OutlinedInput
            id="phone-number"
            label="Phone Number"
            placeholder="e.g. 1234567890"
            {...register('phone', {
              required: 'Phone number is required',
              validate: validatePhone,
            })}
          />
          {errors.phone && (
            <FormHelperText>{errors?.phone?.message}</FormHelperText>
          )}
        </FormControl>
      </Stack>

      <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
        <Stack
          sx={{ m: 2, justifyContent: 'flex-end' }}
          direction="row"
          spacing={2}
        >
          <Button
            variant="contained"
            sx={{ px: 10, py: 2 }}
            disabled={isLoadingInfo}
            onClick={handleSubmit(onSubmit)}
          >
            {isLoadingInfo ? 'Saving...' : 'Save'}
          </Button>
        </Stack>
      </Box>
    </>
  );
};
