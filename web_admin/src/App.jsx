import React from 'react';
import Box from '@mui/material/Box';
import { CssBaseline, Container } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Mode from './components/Mode';
import Battery from './components/Battery';
import Settings from './components/Settings';

const App = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Container>
        {/* Add a header, navigation bar, or other layout components here if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mode" element={<Mode />} />
          <Route path="battery" element={<Battery />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            onChange={(event, path) => {
              console.log('Navigating to:', path+1);
              navigate(path+1); // Use navigate to update the route
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
            <BottomNavigationAction label="Mode" icon={<SportsEsportsIcon />} component={Link} to="mode" />
            <BottomNavigationAction label="Controllers" icon={<Battery4BarIcon />} component={Link} to="battery" />
            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to="settings" />
          </BottomNavigation>
        </Paper>
      </Container>
    </Box>
  );
};

export default App;
