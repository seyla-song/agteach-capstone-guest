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
    if (!value.startsWith("0")) return "Phone number must start with 0";
    if (!phonePattern.test(value)) return "Please enter a valid phone number";
    if (value.length > 15) return "Phone number cannot exceed 15 digits";
    if (value?.length < 8) return "A valid phone number should contains atleast 8 digits";
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
              validate: (value) => {
                if (value.length < 2) return "First name must be at least 2 characters";
                if (value.length > 25) return "First name must be at most 25 characters";
              }
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
              validate: (value) => {
                if (value.length < 2) return "Last name must be at least 2 characters";
                if (value.length > 25) return "Last name must be at most 25 characters";
              }
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
              validate: (value) => {
                if (value.length > 100) return "Address must be at most 100 characters";
              }
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
