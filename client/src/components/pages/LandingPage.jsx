import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Tabs, Tab, Box } from '@mui/material';

import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const LandingPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Sign In"></Tab>
          <Tab label="Sign Up"></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          <SignIn />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
