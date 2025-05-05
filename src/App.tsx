import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { TicketList } from './components/TicketList';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAuth();
  if (!isAdmin) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <Navbar />
          <TicketList />
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
