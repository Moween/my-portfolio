import Header from './components/Header';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core';
import '../css/App.css';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1140,
    },
  },
  typography: {
    h4: {
      fontFamily: `"Lobster", "Helvetica", "Arial", sans-serif`,
    }
  },
  palette: {
    primary: {
      main: '#ffff00',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <Route path='/' component={Home} />
      </Container>    
    </ThemeProvider>
  );
} 

export default App;
