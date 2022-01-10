import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button href="/">
            <Typography
              variant="h6"
              sx={{ color: 'white', textTransform: 'none' }}
            >
              CitiZen
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
