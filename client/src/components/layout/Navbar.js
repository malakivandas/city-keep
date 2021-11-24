import React from 'react';

import { AppBar, Toolbar, IconButton, Box, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <StyledFab color="secondary" aria-label="add">
          <AddIcon />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
