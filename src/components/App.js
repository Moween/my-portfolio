import React, { createContext } from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import Home from '../pages/Home';
import Header from './Header';
import Footer from './Footer';
import { theme } from '../utils/styles';
import '../css/App.css';

export const MediaQueryContext = createContext();

function App() {
  const  mobile = useMediaQuery(theme.breakpoints.down(767));
  const tablet = useMediaQuery(theme.breakpoints.between('md', 1023));

  return (
    <MediaQueryContext.Provider value={{mobile, tablet}}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Header />
          <Route path="/" component={Home} />
          <Footer />
        </Container>
      </ThemeProvider>
    </MediaQueryContext.Provider>
  );
} 

export default App;
