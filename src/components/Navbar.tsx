import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button, Box, Menu, MenuItem, Avatar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, useTheme, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
];

const solutions = [
  { label: 'Solsphere Associates - Professional Services', to: '/' },
  { label: 'Regodit: AI-powered Next-Gen GRC', to: '/' },
];

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);
  const profileOpen = Boolean(profileAnchor);
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  // Drawer content for mobile/tablet
  const drawerContent = (
    <Box sx={{ width: 260 }} role="presentation" onClick={() => setDrawerOpen(false)}>
      <Box display="flex" alignItems="center" px={2} py={2}>
        <RouterLink to="/">
          <img src="/logo.png" alt="Solsphere Logo" style={{ height: 36, marginRight: 8 }} />
        </RouterLink>
        <Typography variant="h6" fontWeight={700} color="#222">Solsphere</Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={RouterLink} to={item.to}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {isAdmin && (
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/dashboard">
              <ListItemText primary="Support Ticket Dashboard" />
            </ListItemButton>
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton onClick={handleMenu}>
            <ListItemText primary="Solutions" />
            <ExpandMoreIcon fontSize="small" />
          </ListItemButton>
        </ListItem>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {solutions.map((sol) => (
            <MenuItem key={sol.label} component={RouterLink} to={sol.to} onClick={handleClose}>{sol.label}</MenuItem>
          ))}
        </Menu>
      </List>
      <Divider />
      <List>
        {!isAdmin && (
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/contact">
              <ListItemText primary="Reach out to Us" />
            </ListItemButton>
          </ListItem>
        )}
        {!isAdmin && (
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/login">
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}
        {isAdmin && user && (
          <ListItem disablePadding>
            <ListItemButton onClick={() => { setDrawerOpen(false); navigate('/logout'); }}>
              <Avatar sx={{ bgcolor: '#1976d2', width: 28, height: 28, mr: 1 }}>{user.email[0].toUpperCase()}</Avatar>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={1} sx={{ px: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <RouterLink to="/">
            <img src="/logo.png" alt="Solsphere Logo" style={{ height: 40, marginRight: 16 }} />
          </RouterLink>
          {!isMobile && (
            <>
              {menuItems.map((item) => (
                <Button key={item.label} component={RouterLink} to={item.to} sx={{ color: '#222', fontWeight: 500, mx: 1 }}>
                  {item.label}
                </Button>
              ))}
              {isAdmin && (
                <Button component={RouterLink} to="/dashboard" sx={{ color: '#222', fontWeight: 500, mx: 1 }}>
                  Support Ticket Dashboard
                </Button>
              )}
              <Button
                endIcon={<ExpandMoreIcon />}
                sx={{ color: '#222', fontWeight: 500, mx: 1 }}
                onClick={handleMenu}
              >
                Solutions
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {solutions.map((sol) => (
                  <MenuItem key={sol.label} component={RouterLink} to={sol.to} onClick={handleClose}>{sol.label}</MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Box>
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={2}>
            {!isAdmin && (
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                sx={{ borderRadius: 2, background: '#000', color: '#fff', px: 3, boxShadow: 'none', textTransform: 'none', fontWeight: 500 }}
              >
                Reach out to Us
              </Button>
            )}
            {!isAdmin && (
              <Button
                variant="contained"
                component={RouterLink}
                to="/login"
                sx={{ borderRadius: 2, background: '#1976d2', color: '#fff', px: 3, boxShadow: 'none', textTransform: 'none', fontWeight: 500 }}
              >
                Login
              </Button>
            )}
            {isAdmin && user && (
              <>
                <IconButton onClick={handleProfileMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: '#1976d2', width: 36, height: 36 }}>
                    {user.email[0].toUpperCase()}
                  </Avatar>
                </IconButton>
                <Menu anchorEl={profileAnchor} open={profileOpen} onClose={handleProfileClose}>
                  <Box px={2} py={1}>
                    <Typography fontWeight={700}>{user.email}</Typography>
                    <Typography fontSize={13} color="text.secondary">Admin</Typography>
                  </Box>
                  <MenuItem onClick={() => { handleProfileClose(); navigate('/logout'); }}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>
        )}
        {isMobile && (
          <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}; 