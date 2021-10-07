import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core';
import Home from '../pages/Home';
import Header from './Header';
import { theme } from '../utils/styles';
import '../css/App.css';

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
