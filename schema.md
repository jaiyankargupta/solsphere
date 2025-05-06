# Data Schemas

This document describes the main TypeScript data models used in the Solsphere Support Ticket Dashboard.

---

## User

Represents an authenticated user (admin).

```ts
interface User {
  email: string;         // User's email address (must be @solsphere.ai for admin)
  name?: string;        // (Optional) User's display name
  isAdmin: boolean;     // True if user is an admin
}
```

---

## Ticket

Represents a support ticket in the dashboard.

```ts
export type TicketStatus = 'Open' | 'In Progress' | 'Resolved' | 'Closed';
export type TicketPriority = 'High' | 'Medium' | 'Low';

interface Ticket {
  id: string;               // Unique ticket ID
  title: string;            // Short summary of the issue
  description: string;      // Detailed description
  status: TicketStatus;     // Current status
  priority: TicketPriority; // Priority level
  createdAt: string;        // ISO date string
  updatedAt: string;        // ISO date string
  createdBy: string;        // Name of the user who created the ticket
  customer: string;         // Customer name
  customerEmail?: string;   // (Optional) Customer email
  category?: string;        // (Optional) Ticket category
}
```

---

## AuthContext

The authentication context provides the following shape:

```ts
interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  login: (email: string) => void;
  logout: () => void;
}
```

---

## Other Types
- You may find additional types in `src/types/` for UI, API, or mock data. 