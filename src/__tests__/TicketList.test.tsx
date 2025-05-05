import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TicketList from '../pages/TicketList';
import { AuthProvider } from '../context/AuthContext';
import { describe, it, expect, vi } from 'vitest';

// Mock the DataGrid component
vi.mock('@mui/x-data-grid', () => ({
    DataGrid: ({ rows, columns, onRowClick }) => (
        <div data-testid="mock-data-grid">
            {rows.map((row) => (
                <div key={row.id} data-testid={`ticket-${row.id}`}>
                    <div>{row.id}</div>
                    <div>{row.title}</div>
                    <div>{row.status}</div>
                    <div>{row.priority}</div>
                    <button 
                        onClick={() => onRowClick({ row })} 
                        data-testid={`status-button-${row.id}`}
                    >
                        {row.status}
                    </button>
                </div>
            ))}
        </div>
    )
}));

const mockTickets = [
    {
        id: 'TICKET-001',
        title: 'Cannot access dashboard',
        description: 'Unable to login to the dashboard',
        status: 'Open',
        priority: 'High',
        createdAt: '2024-03-20T10:00:00Z',
        updatedAt: '2024-03-20T10:00:00Z',
        createdBy: 'John Doe'
    },
    {
        id: 'TICKET-002',
        title: 'API error in production',
        description: 'Getting 500 errors from the API',
        status: 'In Progress',
        priority: 'Medium',
        createdAt: '2024-03-19T15:30:00Z',
        updatedAt: '2024-03-20T09:00:00Z',
        createdBy: 'Jane Smith'
    }
];

const renderTicketList = () => {
    return render(
        <BrowserRouter>
            <AuthProvider>
                <TicketList />
            </AuthProvider>
        </BrowserRouter>
    );
};

describe('TicketList', () => {
    it('should filter tickets by search term', () => {
        renderTicketList();
        
        const searchInput = screen.getByLabelText('Search Tickets');
        fireEvent.change(searchInput, { target: { value: 'John' } });

        expect(screen.getByTestId('ticket-TICKET-001')).toBeInTheDocument();
        expect(screen.queryByTestId('ticket-TICKET-002')).not.toBeInTheDocument();
    });

    it('should filter tickets by status', () => {
        renderTicketList();
        
        const statusSelect = screen.getByRole('combobox', { name: /status/i });
        fireEvent.mouseDown(statusSelect);
        // Find the dropdown option for 'Open'
        const openOptions = screen.getAllByText('Open');
        const openOption = openOptions.find(opt => opt.tagName === 'LI');
        fireEvent.click(openOption!);

        expect(screen.getByTestId('ticket-TICKET-001')).toBeInTheDocument();
        expect(screen.queryByTestId('ticket-TICKET-002')).not.toBeInTheDocument();
    });

    it('should update ticket status', () => {
        renderTicketList();
        
        const statusButton = screen.getByTestId('status-button-TICKET-001');
        fireEvent.click(statusButton);
        
        const statusSelect = screen.getByRole('combobox', { name: /status/i });
        fireEvent.mouseDown(statusSelect);
        // Find the dropdown option for 'In Progress'
        const inProgressOptions = screen.getAllByText('In Progress');
        const inProgressOption = inProgressOptions.find(opt => opt.tagName === 'LI');
        fireEvent.click(inProgressOption!);

        expect(screen.getByTestId('status-button-TICKET-001')).toHaveTextContent('In Progress');
    });
}); 