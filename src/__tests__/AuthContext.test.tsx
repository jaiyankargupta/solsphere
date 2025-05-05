import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { AuthProvider, useAuth } from '../context/AuthContext';

beforeEach(() => {
  localStorage.clear();
});

const TestComponent = () => {
  const { login, logout, user } = useAuth();
  return (
    <div>
      <button onClick={() => login('test@solsphere.ai')}>Login</button>
      <button onClick={() => login('test@invalid.com')}>Invalid Login</button>
      <button onClick={() => logout()}>Logout</button>
      <div data-testid="user">{user?.email || 'no user'}</div>
    </div>
  );
};

const renderWithAuth = (component: React.ReactNode) => {
  return render(
    <AuthProvider>
      {component}
    </AuthProvider>
  );
};

describe('AuthContext', () => {
  it('should allow login with valid solsphere email', () => {
    renderWithAuth(<TestComponent />);
    
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    expect(screen.getByTestId('user')).toHaveTextContent('test@solsphere.ai');
  });

  it('should not allow login with invalid email', () => {
    renderWithAuth(<TestComponent />);
    
    const invalidLoginButton = screen.getByText('Invalid Login');
    fireEvent.click(invalidLoginButton);
    
    expect(screen.getByTestId('user')).toHaveTextContent('no user');
  });

  it('should handle logout correctly', () => {
    renderWithAuth(<TestComponent />);
    
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);
    
    expect(screen.getByTestId('user')).toHaveTextContent('no user');
  });
}); 