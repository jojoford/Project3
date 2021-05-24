import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient  from 'apollo-boost';

import Nav from './components/Nav';
import About from './components/About';
import Carousel from './components/Carousel';
import Contact from './pages/contact';
import Artists from './pages/artists'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})
//alyse added artists and contact


function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
  <div>
   <Nav />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route path="/artists" component={Artists} />
      <Route path="/contact" component={Contact} />
    </Switch>
    
      <Carousel> </Carousel>
      {/* <About></About> */}
  </div>
  </Router>
 </ApolloProvider>
);
}
export default App; 