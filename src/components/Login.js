import React from 'react';
import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

const Login = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: 4,
          boxShadow: 24,
          width: 300,
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>Login</Typography>
        
        <Stack spacing={2}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GoogleIcon />}
            onClick={() => alert('Login with Google')}
          >
            Login with Google
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FacebookIcon />}
            onClick={() => alert('Login with Facebook')}
          >
            Login with Facebook
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Login;
