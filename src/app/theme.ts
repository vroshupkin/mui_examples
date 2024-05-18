import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // https://systemfontstack.com
    fontFamily:
      '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
  },
  palette: {
    background: {
      default: grey[50],
    },
  },
});

export default theme;
