# React Support Ticket Dashboard

## Test Overview
This test evaluates your ability to design and implement a React-based frontend application, demonstrate component architecture skills, and apply state management principles in a real-world scenario.

---

## Context
Modern customer support teams need efficient interfaces to manage and track support tickets. This project focuses on building a frontend dashboard that helps support agents view, filter, and update tickets efficiently.

---

## Scenario
Support agents need a clean, intuitive dashboard to manage a growing queue of customer tickets. They require the ability to quickly filter tickets by various criteria, view detailed information, and update ticket statuses in real-time.

**Example:**
- **Agent:** Jordan, a customer support specialist  
- **Need:** Efficiently manage 50+ daily tickets with minimal clicks and maximum visibility  
- **Problem:** Current systems require too many page transitions and lack proper filtering capabilities

---

## Your Task
Design and implement a React Support Ticket Dashboard that:

- Displays support tickets in a clear, organized format
- Enables filtering and searching through tickets
- Allows agents to update ticket status without navigating away
- Provides detailed views of individual tickets

---

## Deliverables

### Code Implementation


**Must include:**
- Multiple React components with proper hierarchy
- State management using hooks or context
- Mock API integration
- Filtering and sorting functionality
- Responsive design for desktop and tablet
- Basic testing (at least 3 tests)

---

## Core Features
- Ticket list view with key information  
- Filtering by status and priority  
- Search functionality for ticket title and customer  
- Pagination (client-side)

---

## Bonus (Optional)
- Dark mode implementation  
- Additional filtering options  
- Bulk actions on tickets  

---

## Sample Ticket Data (JSON)

```json
[
  {
    "id": "TKT-1001",
    "title": "Login failure on Safari for SSO users",
    "customer": "Acme Corp",
    "customerEmail": "support@acmecorp.com",
    "priority": "High",
    "status": "Open",
    "createdAt": "2025-05-01T10:15:00Z",
    "updatedAt": "2025-05-01T14:30:00Z",
    "description": "Users experiencing redirect loop during SSO login on Safari browsers. Happens only with enterprise accounts.",
    "category": "Authentication"
  },
  {
    "id": "TKT-1002",
    "title": "Dashboard data not refreshing",
    "customer": "TechInnovate LLC",
    "customerEmail": "help@techinnovate.com",
    "priority": "Medium",
    "status": "In Progress",
    "createdAt": "2025-04-29T08:22:00Z",
    "updatedAt": "2025-05-01T09:15:00Z",
    "description": "Analytics dashboard data is stale and not updating with new information despite refreshing the page.",
    "category": "Dashboard"
  }
  // Add 8-13 more sample tickets with varied statuses, priorities, and dates
]
```

---

## Technical Requirements

### React Implementation
- Create reusable functional components
- Use hooks for state management (`useState`, `useEffect`, `useContext`, etc.)
- Implement proper prop typing (TypeScript or PropTypes)
- Follow React best practices for component lifecycle and rendering

---

## Testing Requirements
Implement at least **3 meaningful tests**:
- Component rendering with mock data
- Filter functionality
- Status update workflow

---

## Evaluation Criteria
- **Component Architecture:** Proper component decomposition and hierarchy  
- **State Management:** Effective use of hooks, context, or state libraries  
- **Code Quality:** Clean, readable, well-organized code  
- **UI/UX Design:** Intuitive and responsive user interface  
- **Testing:** Meaningful tests that verify core functionality  

---

## Submission Instructions

* Submit a GitHub/GitLab repository
* Ensure the project can be set up with standard commands (`npm` or `yarn`)

---

## Deadline
You have 48 hours to design a solution. Send us a github / bitbucket etc link to your repo, please keep the repo as public.

---

**Good Luck!**  

Feel free to use open-source tools and pre-trained models. The goal is to show your ability to think critically, build usable systems, and communicate your design effectively.
