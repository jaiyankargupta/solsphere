import { useState, useMemo } from 'react';
import {
  Box,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Snackbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns';
import type { Ticket, TicketStatus, TicketPriority } from '../types/ticket';
import { mockTickets } from '../mocks/tickets';
import VisibilityIcon from '@mui/icons-material/Visibility';

const statusColors = {
  Open: '#ff9800',
  'In Progress': '#2196f3',
  Resolved: '#4caf50',
  Closed: '#9e9e9e',
};

const priorityColors = {
  High: '#f44336',
  Medium: '#ff9800',
  Low: '#4caf50',
};

const statusOptions: TicketStatus[] = ['Open', 'In Progress', 'Resolved', 'Closed'];

export const TicketList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<TicketStatus | 'All'>('All');
  const [priorityFilter, setPriorityFilter] = useState<TicketPriority | 'All'>('All');
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleStatusChange = (id: string, newStatus: TicketStatus) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus, updatedAt: new Date().toISOString() } : t))
    );
    setSnackbar('Ticket status updated!');
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
      const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [searchTerm, statusFilter, priorityFilter, tickets]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Ticket ID', width: 120, cellClassName: 'cell-padding' },
    { field: 'title', headerName: 'Title', width: 250, cellClassName: 'cell-padding' },
    { field: 'customer', headerName: 'Customer', width: 150, cellClassName: 'cell-padding' },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 110,
      cellClassName: 'cell-padding',
      renderCell: ({ value }) => (
        <Typography
          sx={{
            color: priorityColors[value as TicketPriority],
            fontWeight: 'bold',
            py: 0,
            my: 0,
            pt: 0,
            lineHeight: 1.2,
            fontSize: 15,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {value}
        </Typography>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      cellClassName: 'cell-padding',
      renderCell: (params) => (
        <FormControl size="small" fullWidth sx={{ my: 0, py: 0, pt: 0, justifyContent: 'center', height: '32px' }}>
          <Select
            value={params.row.status}
            onChange={e => handleStatusChange(params.row.id, e.target.value as TicketStatus)}
            sx={{ fontWeight: 'bold', color: statusColors[params.row.status as TicketStatus], my: 0, py: 0, lineHeight: 1.2, fontSize: 15, display: 'flex', alignItems: 'center', height: '32px', minHeight: '3px' }}
            MenuProps={{ PaperProps: { sx: { mt: 0, py: 0 }, dense: true } }}
            inputProps={{ sx: { py: 0, my: 0, height: '32px', display: 'flex', alignItems: 'center' } }}
            size="small"
          >
            {statusOptions.map((status) => (
              <MenuItem key={status} value={status} sx={{ color: statusColors[status], fontSize: 15, py: 0.5, minHeight: '32px', display: 'flex', alignItems: 'center' }}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Created',
      width: 180,
      cellClassName: 'cell-padding',
      renderCell: ({ value }) =>
        format(new Date(value as string), 'PPp'),
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      cellClassName: 'cell-padding',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 65,
      cellClassName: 'actions-cell',
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            setSelectedTicket(params.row as Ticket);
            setModalOpen(true);
          }}
          size="small"
          sx={{ padding: '0 0' }}
        >
          <VisibilityIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ height: '100%', width: '100%', maxWidth: 1200, mx: 'auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Support Ticket Dashboard
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          label="Search Tickets"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            label="Status"
            onChange={(e) => setStatusFilter(e.target.value as TicketStatus | 'All')}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Resolved">Resolved</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select
            value={priorityFilter}
            label="Priority"
            onChange={(e) => setPriorityFilter(e.target.value as TicketPriority | 'All')}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Paper sx={{ height: 'calc(100vh - 250px)' }}>
        <DataGrid
          rows={filteredTickets}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          density="comfortable"
          sx={{ '& .cell-padding': { padding: '0 8px' }, '& .actions-cell': { paddingLeft: '0' } }}
        />
      </Paper>
      <Snackbar
        open={!!snackbar}
        autoHideDuration={2000}
        onClose={() => setSnackbar(null)}
        message={snackbar}
      />
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Ticket Details</DialogTitle>
        <DialogContent dividers>
          {selectedTicket && (
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Ticket ID</Typography>
              <Typography mb={1}>{selectedTicket.id}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Title</Typography>
              <Typography mb={1}>{selectedTicket.title}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Customer</Typography>
              <Typography mb={1}>{selectedTicket.customer} ({selectedTicket.customerEmail})</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Priority</Typography>
              <Typography mb={1}>{selectedTicket.priority}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Status</Typography>
              <Typography mb={1}>{selectedTicket.status}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Created</Typography>
              <Typography mb={1}>{format(new Date(selectedTicket.createdAt), 'PPpp')}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Updated</Typography>
              <Typography mb={1}>{format(new Date(selectedTicket.updatedAt), 'PPpp')}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Category</Typography>
              <Typography mb={1}>{selectedTicket.category}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">Description</Typography>
              <Typography mb={1}>{selectedTicket.description}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)} variant="contained" sx={{ background: '#000', color: '#fff' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}; 
