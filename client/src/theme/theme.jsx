import { createTheme } from '@mui/material/styles';

import LinkBehavior from './LinkBehaviour';

let theme = createTheme({
  palette: {
    primary: {
      main: '#5ea170',
    },
    secondary: {
      main: '#c0963f',
      contrastText: '#fff',
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;
