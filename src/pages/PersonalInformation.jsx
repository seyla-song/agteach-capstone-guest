import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddPersonalInfoMutation } from '../services/api/authApi';
import { useGetLocationsQuery } from '../services/api/locationApi';

import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  Autocomplete,
} from '@mui/material';

import { LogoLink, FormInput } from '../components/index';

export default function PersonalInfoForm() {
  const [skip, setSkip] = useState(false);
  const { dob } = useSelector((state) => state.user);
  const { email } = useSelector((state) => state.user);
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      city: '',
      imageUrl: 'https://placehold.co/600x400/png',
    },
  });
  const navigate = useNavigate();
  const { data } = useGetLocationsQuery();
  const [addPerosnalInfo, { isLoading }] = useAddPersonalInfoMutation();

  const onSubmit = async (data) => {
    const {city: selectedCity} = data;

    cities.forEach((city) => {
      if (city.name === selectedCity) {
        data.locationId = city.locationId
      };
    });

    try {
      await addPerosnalInfo({
        ...data,
        dateOfBirth: dob,
        email,
      }).unwrap();
      navigate('/auth/signup/verification');
    } catch (error) {

    };
  };

  useEffect(() => {
    if (data) {
      setCities(data.data)
    }
  }, [data])

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]+$/; // Only digits
    if (!value) return true; // Allow empty input if not required
    if (value.length > 15) return 'Phone number cannot exceed 15 digits';
    if (value?.length < 8) return 'A Valid phone number should contains atleast 8 digits';
    if (String(value[0]) !== '0') return 'Phone number shoud start with 0. e.g. 0123456789';
    return phonePattern.test(value) || 'Please enter a valid phone number';
  };

  return (
    <Box>
      <Container maxWidth={false} sx={{ maxWidth: '700px' }}>
        <Stack paddingTop={{ xs: 8, md: 10 }} alignItems="center" spacing={4}>
          {/* Logo */}
          <LogoLink />

          <Typography variant="h2" textAlign="center">
            Additional Information
          </Typography>

          <Stack
            spacing={2}
            component="form"
            width={'100%'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={4}>
              {/* Personal Information */}
              <Stack spacing={2}>
                <Typography variant="blgsm">Name & Address</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                  <FormInput
                    label="First Name"
                    placeholder="e.g. Jane"
                    {...register('firstName', {
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: 'First name can only contain letters',
                      },
                      maxLength: {
                        value: 25,
                        message: 'First name cannot be more than 25 characters'
                      },
                      validate: (value) => {
                        if (!value) return true;
                        if (value.length < 2) return 'First name must be at least 2 characters';
                        if (value.length > 25) return 'First name must be at most 25 characters';
                      },
                    })}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                  />
                  <FormInput
                    label="Last Name"
                    placeholder="e.g. Smith"
                    {...register('lastName', {
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: 'Last name can only contain letters',
                      },
                      maxLength: {
                        value: 25,
                        message: 'Last name cannot be more than 25 characters'
                      },
                      validate: (value) => {
                        if (!value) return true;
                        if (value.length < 2) return 'Last name must be at least 2 characters';
                        if (value.length > 25) return 'Last name must be at most 25 characters';
                      },
                    })}
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                  />
                </Box>
                <Autocomplete
                  fullWidth
                  options={cities}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
                      slotProps={{
                        htmlInput: {
                          ...params.inputProps,
                        },
                      }}
                      {...register('city', {
                        validate: (value) => {
                          if (!value.length) {
                            return true
                          }
                          return cities.some((city) => city.name === value) || 'Please provide a valid city'
                        }
                      })}
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  )}
                />
                <FormInput
                  label="Address"
                  placeholder="e.g. 1234 Main St"
                  {...register('address', {
                    validate: (value) => {
                      if (!value) return true;
                      if (value.length < 2) return 'Address must be at least 2 characters';
                      if (value.length > 100) return 'Address must be at most 100 characters';
                    },
                  })}
                  error={!!errors.address}
                  helperText={errors?.address?.message}
                />
              </Stack>

              {/* Contact Information */}
              <Stack spacing={2}>
                <Typography variant="blgsm">Contact Information</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                  <FormInput
                    label="Phone number"
                    placeholder="e.g. 0123456789"
                    {...register('phone', {
                      validate: validatePhone,
                    })}
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              display={'flex'}
              justifyContent="end"
            >
              <Button
                type="submit"
                onClick={() => setSkip(true)}
                variant="outlined"
                sx={{ padding: { xs: '8px 20px', md: '8px 35px' } }}
                disabled={isLoading}
              >
                Skip
              </Button>

              <Button
                type="submit"
                onClick={() => setSkip(false)}
                variant="contained"
                sx={{ padding: { xs: '8px 20px', md: '8px 35px' } }}
                disabled={isLoading}
              >
                {isLoading && !skip ? 'Submitting...' : 'Submit'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}