import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, Typography } from '@mui/material';
import { Navbar } from '../components/Navbar';

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    setTimeout(() => navigate('/'), 1200);
  }, [logout, navigate]);

  return (
    <Box>
      <Navbar />
      <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">Logging out...</Typography>
      </Box>
    </Box>
  );
} 