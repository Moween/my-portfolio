import Header from './components/Header';
import Home from './pages/Home';
import About from './components/About';
import { Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
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
  },
  typography: {
    h4: {
      fontFamily: `"Lobster", "Helvetica", "Arial", sans-serif`,
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <main>
          <Route path='/' component={Home} />
          <About />
        </main>
      </Container>    
    </ThemeProvider>
  );
} 

export default App;
