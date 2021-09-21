import Header from './components/Header';
import { createTheme, ThemeProvider } from '@material-ui/core';
import './css/App.css';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1140,
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>    
  );
}

export default App;
