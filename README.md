# Solsphere Support Ticket Dashboard

A modern, responsive support ticket dashboard built with React, Vite, TypeScript, and Material-UI (MUI).

## Folder Structure

```
/ (root)
├── public/           # Static assets (favicon, logo, etc.)
├── src/
│   ├── components/   # Reusable UI components (Navbar, Footer, TicketList, etc.)
│   ├── context/      # React context providers (e.g., AuthContext)
│   ├── mocks/        # Mock data for tickets, users, etc.
│   ├── pages/        # Page components (Home, About, Contact, Dashboard, Login, etc.)
│   ├── __tests__/    # Unit and integration tests
│   ├── types/        # TypeScript type definitions (Ticket, User, etc.)
│   └── main.tsx      # App entry point
├── vercel.json       # Vercel config for SPA routing
├── package.json      # Project dependencies and scripts
├── tsconfig*.json    # TypeScript configuration
└── README.md         # Project documentation
```

## Main URLs & What They Serve

- `/`              — Home page: Product intro, features, and call to action
- `/about`         — About page: Team, story, and mission
- `/contact`       — Contact page: Contact form and company info
- `/login`         — Admin login (only @solsphere.ai emails allowed)
- `/dashboard`     — Support Ticket Dashboard (admin only): View, filter, and manage tickets

## Code Overview
- **components/**: Navbar, Footer, TicketList, and other UI building blocks
- **context/**: Authentication logic and provider
- **mocks/**: Mock ticket/user data for development/testing
- **pages/**: Each route/page in the app
- **__tests__/**: Vitest + Testing Library tests for core features
- **types/**: TypeScript interfaces for data models

## Running Locally
```sh
npm install
npm run dev
```

## Deployment
- Deployed on Vercel. SPA routing is handled via `vercel.json`.

## 🚀 Features

- **Admin-only dashboard**: Only authorized users (admin emails) can access the dashboard.
- **Responsive design**: Works beautifully on desktop, tablet, and mobile.
- **Ticket list with filtering/search**: Quickly find tickets by status, priority, or search term.
- **Inline status updates**: Change ticket status directly from the dashboard.
- **Detailed ticket view**: Click a ticket to see all details in a modal.
- **Authentication**: Login/logout flow with email validation.
- **Modern UI**: Clean, accessible, and user-friendly interface.
- **Testing**: Core features are covered by automated tests.


## 🛠️ Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/jaiyankargupta/solsphere.git
   cd solsphere
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

4. **Run tests:**
   ```sh
   npm test
   ```

## 💡 How This Website Works

- **Login:** Only users with an `@solsphere.ai` email can log in as admin. Others can browse public pages.
- **Dashboard:**
  - Admins see the Support Ticket Dashboard link in the navbar.
  - The dashboard displays all tickets in a table with columns for ID, title, status, priority, etc.
  - Use the search bar and dropdowns to filter tickets by status, priority, or search term.
  - Click a ticket row to view details in a modal.
  - Change ticket status inline using the dropdown; updates are reflected instantly.
- **Responsive UI:**
  - On mobile, filters stack vertically and less important columns are hidden for clarity.
  - The navbar collapses into a hamburger menu on small screens.

## 🧑‍💻 Tech Stack
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material-UI (MUI)](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) & [Testing Library](https://testing-library.com/)

## 🧪 Testing
- Run all tests:
  ```sh
  npm test
  ```
- Tests cover authentication, ticket filtering, and status updates.

## 📂 Project Structure
- `src/components/` — Navbar, TicketList, and other UI components
- `src/pages/` — Page components (Dashboard, Login, Home, etc.)
- `src/context/` — Auth context
- `src/mocks/` — Mock ticket data
- `src/__tests__/` — Automated tests

---

Feel free to fork, contribute, or use this as a starting point for your own support dashboard!
