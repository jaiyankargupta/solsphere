// Define the types
type Priority = 'High' | 'Medium' | 'Low';
type Status = 'Open' | 'In Progress' | 'Resolved' | 'Closed';

// Export the interface
export interface Ticket {
    id: string;
    title: string;
    customer: string;
    customerEmail: string;
    priority: Priority;
    status: Status;
    createdAt: string;
    updatedAt: string;
    description: string;
    category: string;
    createdBy: string;
}

// Export the type aliases
export type TicketStatus = Status;
export type TicketPriority = Priority; 