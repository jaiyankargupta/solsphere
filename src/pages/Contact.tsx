import { Box, Typography, Paper, TextField, Button, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useTheme } from '@mui/material/styles';

export default function Contact() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box>
      <Navbar />
      <Box sx={{ background: '#f4f8f7', py: 6, px: 2, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Contact Us
        </Typography>
        <Typography color="text.secondary" maxWidth={900} mx="auto">
          Have questions or need more information? We're here to help! Reach out to us via the form below or find our contact details.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 1, sm: 2, md: 4 }, py: { xs: 4, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems={isMdUp ? 'center' : 'flex-start'} justifyContent="center">
          <Grid xs={12} md={7} sx={{ width: '100%', maxWidth: { md: 600 } }}>
            <Paper elevation={2} sx={{ p: { xs: 2, sm: 4 }, width: '100%' }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Let's Connect and Collaborate
              </Typography>
              <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                  <TextField label="Name*" fullWidth variant="outlined" margin="dense" />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField label="Email*" fullWidth variant="outlined" margin="dense" />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField label="Company Name*" fullWidth variant="outlined" margin="dense" />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField label="Your Role*" fullWidth variant="outlined" margin="dense" />
                </Grid>
                <Grid xs={6.23}>
                  <TextField 
                    label="Message*" 
                    fullWidth 
                    variant="outlined" 
                    margin="dense" 
                    multiline 
                    minRows={5}
                    sx={{ width: '200%' }}
                  />
                </Grid>
              </Grid>
              <Box mt={3}>
                <Button variant="contained" sx={{ background: '#000', color: '#fff', borderRadius: 2, px: 4, textTransform: 'none', fontWeight: 500 }}>
                  Submit
                </Button>
              </Box>
            </Paper>
          </Grid>
          
        </Grid>
      </Box>
      <Box sx={{ py: 6, px: 2, textAlign: 'center', background: '#f4f8f7', mt: 6 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Let's Connect and Collaborate
        </Typography>
        <Typography color="text.secondary" maxWidth={700} mx="auto" mb={2}>
          Whether you have a question about our product or would like to collaborate with us, feel free to reach out to us.
        </Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          Email: <a href="mailto:connect@solsphere.ai" style={{ color: '#1976d2', textDecoration: 'none' }}>connect@solsphere.ai</a>
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
} 