import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthProvider } from '../context/AuthContext';
import { describe, it, expect, vi, beforeAll } from 'vitest';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

beforeAll(() => {
  vi.stubGlobal('alert', vi.fn());
});

describe('Login', () => {
  const renderLogin = () => {
    return render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
  };

  it('should show error for invalid email domain', () => {
    renderLogin();
    
    const emailInput = screen.getByLabelText(/email/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@invalid.com' } });
    fireEvent.click(loginButton);

    expect(screen.getByText('Please use your @solsphere.ai email address. This is only for admin users.')).toBeInTheDocument();
  });

  it('should allow login with valid solsphere email', () => {
    renderLogin();
    
    const emailInput = screen.getByLabelText(/email/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@solsphere.ai' } });
    fireEvent.click(loginButton);

    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });

  it('should show validation error for empty email', () => {
    renderLogin();
    
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    expect(screen.getByTestId('login-error')).toHaveTextContent('Email is required');
  });
}); 