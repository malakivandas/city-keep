import React from 'react';

import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textTransform: 'none',
              }}
            >
              CitiZen
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
