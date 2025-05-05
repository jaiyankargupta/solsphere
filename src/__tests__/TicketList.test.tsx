import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import TicketList from '../pages/TicketList';
import { AuthProvider } from '../context/AuthContext';
import { describe, it, expect, vi } from 'vitest';

// Mock the DataGrid component
vi.mock('@mui/x-data-grid', () => ({
    DataGrid: ({ rows, onRowClick }: { rows: any[]; onRowClick: any }) => (
        <div data-testid="mock-data-grid">
            {rows.map((row: any) => (
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
        const openOption = openOptions.find((opt: HTMLElement) => opt.tagName === 'LI');
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
        const inProgressOption = inProgressOptions.find((opt: HTMLElement) => opt.tagName === 'LI');
        fireEvent.click(inProgressOption!);

        expect(screen.getByTestId('status-button-TICKET-001')).toHaveTextContent('In Progress');
    });
}); 