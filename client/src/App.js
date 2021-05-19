import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';


import About from './components/About';
import Carousel from './components/Carousel';
function App() {

  return (
    <div>
      <main>
        <Carousel></Carousel>
        <About></About>
      </main>
    </div>
  );
}

export default App;
