import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Navbar } from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { login, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate('/dashboard');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!email.endsWith('@solsphere.ai')) {
      setError('Please use your @solsphere.ai email address. This is only for admin users.');
      alert('Please use your @solsphere.ai email address. This is only for admin users.');
      return;
    }
    if (login(email)) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Login failed.');
    }
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper sx={{ p: 2, maxWidth: 500, width: '100%' }}>
          <Typography variant="h5" fontWeight={700} mb={2} align="center">
            Admin Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
              margin="normal"
            />
            {error && <Typography color="error" fontSize={14} data-testid="login-error">{error}</Typography>}
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, background: '#000', color: '#fff' }}>
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
} 