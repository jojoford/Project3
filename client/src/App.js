import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient from 'apollo-boost';

// add detail page for photographers?
// add home page? This will have seeded data of their work?
// about page would be about app itself
import About from './components/About';
import Nav from './components/Nav';

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


function App() {
    return (
    <ApolloProvider client={client}>
      <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/about" component={About} />
      </Switch>
        <About></About>
    </div>
    </Router>
   </ApolloProvider>
  );
}

export default App;
