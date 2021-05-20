import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';

import Nav from './components/Nav';
import About from './components/About';
import Carousel from './components/Carousel';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Carousel></Carousel>
        <About></About>
      </main>
    </div>
  );
}

export default App;
