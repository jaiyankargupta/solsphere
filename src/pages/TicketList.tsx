import { useState } from 'react';
import { Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Stack, useTheme, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockTickets } from '../mocks/tickets';

export default function TicketList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [priorityFilter, setPriorityFilter] = useState('All');
    const [tickets, setTickets] = useState(mockTickets);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Responsive columns
    const columns = [
        { field: 'id', headerName: 'Ticket ID', minWidth: 120, flex: 1 },
        { field: 'title', headerName: 'Title', minWidth: 180, flex: 2 },
        { field: 'status', headerName: 'Status', minWidth: 120, flex: 1 },
        { field: 'priority', headerName: 'Priority', minWidth: 120, flex: 1 },
        { field: 'createdBy', headerName: 'Created By', minWidth: 140, flex: 1, hide: isMobile },
        { field: 'createdAt', headerName: 'Created At', minWidth: 160, flex: 1, hide: isMobile },
    ];

    const filteredTickets = tickets.filter(ticket => {
        const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ticket.createdBy.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
        const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
        return matchesSearch && matchesStatus && matchesPriority;
    });

    const handleRowClick = (params) => {
        const { row } = params;
        const newStatus = row.status === 'Open' ? 'In Progress' : 'Open';
        setTickets(tickets.map(ticket => 
            ticket.id === row.id ? { ...ticket, status: newStatus } : ticket
        ));
    };

    return (
        <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, maxWidth: 1200, mx: 'auto' }}>
            <Typography variant="h4" gutterBottom fontSize={{ xs: 22, sm: 28, md: 32 }}>
                Support Ticket Dashboard
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 3 }}
            >
                <TextField
                    label="Search Tickets"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                    size={isMobile ? 'small' : 'medium'}
                />
                <FormControl fullWidth size={isMobile ? 'small' : 'medium'}>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        value={statusFilter}
                        label="Status"
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Open">Open</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Closed">Closed</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth size={isMobile ? 'small' : 'medium'}>
                    <InputLabel id="priority-label">Priority</InputLabel>
                    <Select
                        labelId="priority-label"
                        value={priorityFilter}
                        label="Priority"
                        onChange={(e) => setPriorityFilter(e.target.value)}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Box sx={{ width: '100%', overflowX: { xs: 'auto', sm: 'visible' } }}>
                <DataGrid
                    rows={filteredTickets}
                    columns={columns}
                    onRowClick={handleRowClick}
                    autoHeight
                    disableRowSelectionOnClick
                    sx={{
                        minWidth: 600,
                        fontSize: { xs: 12, sm: 14, md: 16 },
                        '& .MuiDataGrid-columnHeaders': {
                            fontSize: { xs: 13, sm: 15, md: 17 },
                        },
                        '& .MuiDataGrid-cell': {
                            py: { xs: 1.5, sm: 1 },
                        },
                        '& .MuiButtonBase-root': {
                            minWidth: { xs: 36, sm: 40 },
                            minHeight: { xs: 36, sm: 40 },
                        },
                    }}
                />
            </Box>
        </Box>
    );
} 