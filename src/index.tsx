import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import theme from './app/theme';

async function main() {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    createRoot(rootElement).render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline enableColorScheme> */}
          <App />
          {/* </CssBaseline> */}
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

main();
