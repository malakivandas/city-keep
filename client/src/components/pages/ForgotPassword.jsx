import React from 'react';

import {
  TextField,
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // AWS Cognito Forgot Password
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h6" sx={{ mt: 3 }}>
        Forgot Password
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Recovery Email
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
