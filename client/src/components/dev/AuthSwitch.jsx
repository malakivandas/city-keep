import React from 'react';

import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const StyledSwitch = styled(Switch)({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  right: 0,
});

const AuthSwitch = ({ checked, onChange }) => {
  return (
    <StyledSwitch
      checked={checked}
      onChange={onChange}
      color="secondary"
    />
  );
};

export default AuthSwitch;
