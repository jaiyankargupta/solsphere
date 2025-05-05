import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => (
  <Box sx={{ background: '#f4f8f7', py: 3, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 6 }}>
    <Box display="flex" alignItems="center">
      <img src="/logo.png" alt="Solsphere Logo" style={{ height: 36, marginRight: 12 }} />
      <Typography variant="body2" color="text.secondary">
        © 2025 Solsphere AI, Inc. All rights reserved.
      </Typography>
    </Box>
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="h6" sx={{ fontWeight: 600, mr: 1, color: '#222' }}>
        Connect with Us
      </Typography>
      <IconButton href="https://www.linkedin.com/company/solsphere/" target="_blank" rel="noopener" sx={{ border: '1px solid #e0e0e0', background: '#fff' }}>
        <LinkedInIcon />
      </IconButton>
    </Box>
  </Box>
); 