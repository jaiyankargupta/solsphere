import { Box, Typography, Divider } from '@mui/material';
import TicketList from './TicketList';

export default function Dashboard() {
  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', p: { xs: 1, sm: 2, md: 4 } }}>
      <Typography variant="h3" fontWeight={700} fontSize={{ xs: 24, sm: 32, md: 38 }} mb={1}>
        Support Ticket Dashboard
      </Typography>
      <Typography color="text.secondary" fontSize={{ xs: 14, sm: 16 }} mb={3}>
        Manage, filter, and update all customer support tickets in one place. Use the filters and search to quickly find and resolve issues.
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <TicketList />
    </Box>
  );
} 