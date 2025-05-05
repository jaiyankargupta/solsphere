# Solsphere Support Ticket Dashboard

A modern, responsive support ticket management dashboard for customer support teams, built with React, TypeScript, Vite, and Material-UI.

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
   git clone https://github.com/jaiyankargupta/solsphere_Assignment.git
   cd solsphere_Assignment
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
