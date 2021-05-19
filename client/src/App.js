import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';


import About from './components/About';
import Carousel from './components/Carousel';
function App() {

  return (
    <ApolloProvider>
      <Router>
    <div>
      <Nav />
      <main>
        <Carousel></Carousel>
        <About></About>
      </main>
    </div>
    </Router>
   </ApolloProvider>
  );
}

export default App;
