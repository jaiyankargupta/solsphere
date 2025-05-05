import { Box, Typography, Paper, Button } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';

const leaders = [
  {
    name: 'Sahil Pugalia, Co-Founder',
    img: 'https://www.solsphere.ai/_next/image?url=%2Fteam%2Fsahil.png&w=256&q=75',
    desc: 'Sahil leverages over 15 years of experience in DevOps, cloud technologies, and cybersecurity to drive innovation, leading the team in delivering secure, scalable solutions.'
  },
  {
    name: 'Priyanka Choudhury, Co-Founder',
    img: 'https://www.solsphere.ai/_next/image?url=%2Fteam%2Fpriyanka.jpeg&w=256&q=75',
    desc: 'With nearly 20 years in regulatory compliance, risk management, and audits, Priyanka is a leader in the GRC space, driving compliance innovation at Solsphere AI.'
  }
];

export default function About() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Our Team, Your Trust
        </Typography>
        <Typography color="text.secondary" maxWidth={900} mx="auto" mb={4}>
          Behind every great solution is a team that cares. We're passionate, focused, and committed to creating tools that address the complex challenges in audits and GRC — because we believe in making lives easier. Our solutions are designed to protect your organization from the perils of accelerated digitization and innovation and empower you to operate effectively and grow in a highly regulated world.
        </Typography>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Our Story and the Team Behind It
        </Typography>
        <Typography color="text.secondary" maxWidth={900} mx="auto">
          In today's fast-moving digital world, organizations struggle to keep up with evolving regulations while managing compliance budgets, protecting customer data, and driving business growth. Compliance is no longer just a checkbox—it's a critical pillar of trust and resilience.<br /><br />
          As former clients, auditors, and risk professionals, we lived these challenges firsthand. We saw how outdated, manual and fragmented processes made compliance burdensome, exposing organizations to regulatory pitfalls, data breaches, and security failures. While regulations advanced, innovation in GRC lagged behind, leaving businesses vulnerable.<br /><br />
          That's why we built <b>Solsphere AI</b>. Backed by decades of expertise in risk, cybersecurity, AI, and audits, we're redefining how businesses navigate compliance with automation, intelligence, and efficiency. Our mission is simple: make security and compliance effortless, so businesses can focus on growth.
        </Typography>
      </Box>
      <Box sx={{ background: '#f4f8f7', py: 6, px: 2, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Leadership Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {leaders.map((l) => (
            <Grid xs={12} md={4} key={l.name} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={2} sx={{ p: 3, minHeight: 220, width: 1, maxWidth: 350, mx: 'auto' }}>
                <img src={l.img} alt={l.name} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
                <Typography variant="h6" fontWeight={700} gutterBottom>{l.name}</Typography>
                <Typography color="text.secondary">{l.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ background: '#f4f8f7', py: 6, px: 2, textAlign: 'center', mt: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Join Us on Our Journey
        </Typography>
        <Typography color="text.secondary" maxWidth={900} mx="auto" mb={3}>
          Welcome to a future where governance, risk management and compliance are no longer a burden but an opportunity to drive efficiency and growth.
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="/contact"
          sx={{ background: '#000', color: '#fff', borderRadius: 2, px: 4, textTransform: 'none', fontWeight: 500 }}
        >
          Be Part of Our Journey
        </Button>
      </Box>
      <Footer />
    </Box>
  );
} 