import { Box, Typography, Button, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const features = [
  {
    title: 'Autonomous Compliance',
    desc: 'Automate and simplify compliance for SOC 2, ISO 27001, HIPAA, GDPR and many more frameworks.'
  },
  {
    title: 'Continuous risk management',
    desc: 'Ensure proactive risk management through integrated and continuous risk and compliance monitoring.'
  },
  {
    title: 'Frictionless audits',
    desc: 'Enhance the audit experience through automated evidence collection and review and seamless auditor collaboration.'
  },
  {
    title: 'Regulatory Adaptability',
    desc: 'Quickly adapt to the constantly changing regulatory landscape.'
  },
];

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ py: { xs: 6, md: 10 }, textAlign: 'center', px: 2 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Secure. Comply. Thrive
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth={800} mx="auto">
          At Solsphere we are committed to enabling organizations thrive in a rapidly evolving digital landscape.<br />
          Our solutions are designed to protect your business from the risks of accelerated digitization while empowering you to navigate and grow confidently in a complex regulatory environment. We specialize in delivering comprehensive security assessments tailored to your unique requirements, backed by a team of experts dedicated to securing your digital assets.
        </Typography>
      </Box>
      <Box sx={{ background: '#f4f8f7', py: 6, px: { xs: 2, md: 8 } }}>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Regodit: AI-powered Next-Gen GRC
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" maxWidth={900} mx="auto" mb={4}>
          Our product aims to redefine the entire GRC experience by making the process seamless, intuitive, and efficient. It will ensure businesses thrive in a world where risk management is proactive, compliance is a part of the company DNA, and audit is no longer a drain on resources.
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {features.map((f) => (
            <Grid xs={12} sm={8} md={5} key={f.title} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={2} sx={{
                p: { xs: 2, sm: 3 },
                border: '1px solid #e0e0e0',
                minHeight: 100,
                maxWidth: 340,
                width: '100%',
                borderRadius: 3,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>{f.title}</Typography>
                <Typography color="text.secondary">{f.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={5}>
          <Button 
            variant="contained" 
            size="large" 
            href="https://regodit.com/contact-us/"
            target="_blank"
            rel="noopener"
            sx={{ background: '#000', color: '#fff', borderRadius: 2, px: 4, textTransform: 'none', fontWeight: 500 }}
          >
            Sign Up for Early Access →
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
} 